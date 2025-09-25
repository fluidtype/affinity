import { useEffect, useState } from "react";

function detectMobileSafari() {
  if (typeof navigator === "undefined") {
    return false;
  }

  const { userAgent } = navigator;
  const isIOSDevice =
    /iP(ad|hone|od)/.test(userAgent) ||
    (userAgent.includes("Mac") && typeof document !== "undefined" && "ontouchend" in document);
  if (!isIOSDevice) {
    return false;
  }

  const isWebKit = /WebKit/.test(userAgent);
  const isExcludedBrowser = /CriOS|FxiOS|OPiOS|EdgiOS|mercury/i.test(userAgent);

  return isIOSDevice && isWebKit && !isExcludedBrowser;
}

export function useIsMobileSafari() {
  const [isMobileSafari, setIsMobileSafari] = useState(false);

  useEffect(() => {
    setIsMobileSafari(detectMobileSafari());
  }, []);

  return isMobileSafari;
}
