type DataLayerEvent = Record<string, unknown> & { event: string };

type DataLayerWindow = Window & { dataLayer?: DataLayerEvent[] };

export const track = (event: string, params?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;
  const win = window as DataLayerWindow;
  if (!Array.isArray(win.dataLayer)) {
    win.dataLayer = [];
  }
  const payload: DataLayerEvent = params ? { event, ...params } : { event };
  win.dataLayer.push(payload);
};
