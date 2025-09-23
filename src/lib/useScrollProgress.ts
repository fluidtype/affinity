"use client";

import { useSyncExternalStore } from "react";

type ScrollProgressState = {
  scrollY: number;
  progress: number;
  scrolled: boolean;
  headerThreshold: number;
  stickyThreshold: number;
};

const HEADER_THRESHOLD_VALUE = 12;
const STICKY_PROGRESS_THRESHOLD_VALUE = 0.45;

const initialState: ScrollProgressState = {
  scrollY: 0,
  progress: 0,
  scrolled: false,
  headerThreshold: HEADER_THRESHOLD_VALUE,
  stickyThreshold: STICKY_PROGRESS_THRESHOLD_VALUE,
};

let state: ScrollProgressState = initialState;
const listeners = new Set<() => void>();
let frame = 0;
let listening = false;

const getSnapshot = () => state;
const getServerSnapshot = () => initialState;

const updateState = () => {
  frame = 0;
  const scrollY = window.scrollY || window.pageYOffset;
  const doc = document.documentElement;
  const max = Math.max(doc.scrollHeight - window.innerHeight, 0);
  const progress = max > 0 ? Math.min(scrollY / max, 1) : 0;
  const scrolled = scrollY > HEADER_THRESHOLD_VALUE;

  if (
    scrollY !== state.scrollY ||
    progress !== state.progress ||
    scrolled !== state.scrolled
  ) {
    state = {
      ...state,
      scrollY,
      progress,
      scrolled,
    };
    listeners.forEach((listener) => listener());
  }
};

const onScroll = () => {
  if (frame) return;
  frame = window.requestAnimationFrame(updateState);
};

const start = () => {
  if (listening || typeof window === "undefined") return;
  listening = true;
  frame = window.requestAnimationFrame(updateState);
  window.addEventListener("scroll", onScroll, { passive: true });
};

const stop = () => {
  if (!listening || typeof window === "undefined") return;
  window.removeEventListener("scroll", onScroll);
  if (frame) {
    window.cancelAnimationFrame(frame);
    frame = 0;
  }
  listening = false;
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);

  if (typeof window !== "undefined") {
    if (!listening) {
      start();
    }

    return () => {
      listeners.delete(listener);
      if (!listeners.size) {
        stop();
      }
    };
  }

  return () => {
    listeners.delete(listener);
  };
};

export function useScrollProgress() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export const SCROLL_HEADER_THRESHOLD = HEADER_THRESHOLD_VALUE;
export const STICKY_PROGRESS_THRESHOLD = STICKY_PROGRESS_THRESHOLD_VALUE;
