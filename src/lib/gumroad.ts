let gumroadPromise: Promise<void> | null = null;

export async function waitGumroadReady(timeout = 5000): Promise<void> {
  if (typeof window === "undefined") return;

  const win = window as unknown as {
    GumroadOverlay?: { open: (url: string) => void };
  };

  if (win.GumroadOverlay) {
    console.log("[Affinity] Gumroad already present, skipping load.");
    return;
  }

  if (!gumroadPromise) {
    console.log("[Affinity] Loading Gumroad script…");
    gumroadPromise = new Promise<void>((resolve) => {
      const script = document.createElement("script");
      script.id = "gumroad-sdk";
      script.src = "https://gumroad.com/js/gumroad.js";
      script.async = true;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  }

  const start = Date.now();
  return new Promise<void>((resolve, reject) => {
    const check = () => {
      if (win.GumroadOverlay) {
        resolve();
        return;
      }
      if (Date.now() - start > timeout) {
        console.error("[Affinity] Gumroad overlay not ready after timeout");
        reject(new Error("Gumroad overlay not ready"));
        return;
      }
      setTimeout(check, 50);
    };
    gumroadPromise!.then(check);
  });
}
