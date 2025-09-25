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
let listening = false;
let rafId: number | null = null;
let lastExec = 0;
let lastProgress = initialState.progress;
const DEFAULT_THRESHOLD = 0.01;
const THROTTLE_MS = 16;

const getNow = () => {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return Date.now();
};

const getSnapshot = () => state;
const getServerSnapshot = () => initialState;

const calc = () => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const scrollY = window.scrollY ?? window.pageYOffset ?? 0;
  const doc = document.documentElement;
  const max = Math.max(doc.scrollHeight - window.innerHeight, 0);
  const ratio = max > 0 ? scrollY / max : 0;
  const progress = max > 0 ? Math.min(Math.max(ratio, 0), 1) : 0;
  const scrolled = scrollY > HEADER_THRESHOLD_VALUE;

  const progressDelta = Math.abs(progress - lastProgress);
  const effectiveDelta = scrolled !== state.scrolled
    ? Math.max(progressDelta, DEFAULT_THRESHOLD)
    : progressDelta;

  const hasChanges =
    scrollY !== state.scrollY ||
    progress !== state.progress ||
    scrolled !== state.scrolled;

  if (hasChanges && effectiveDelta >= DEFAULT_THRESHOLD) {
    state = {
      ...state,
      scrollY,
      progress,
      scrolled,
    };
    lastProgress = progress;
    listeners.forEach((listener) => listener());
  }
};

const scheduleCalc = () => {
  if (typeof window === "undefined") {
    return;
  }

  if (rafId !== null) {
    window.cancelAnimationFrame(rafId);
    rafId = null;
  }

  rafId = window.requestAnimationFrame(() => {
    rafId = null;
    calc();
  });
};

const onScroll = () => {
  if (typeof window === "undefined") {
    return;
  }

  const now = getNow();
  if (now - lastExec < THROTTLE_MS) {
    if (rafId !== null) {
      return;
    }
    return;
  }

  lastExec = now;
  scheduleCalc();
};

const handleScroll = () => onScroll();
const handleResize = () => onScroll();

const start = () => {
  if (listening || typeof window === "undefined") return;
  listening = true;
  calc();
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleResize);
  window.addEventListener("orientationchange", handleResize);
};

const stop = () => {
  if (!listening || typeof window === "undefined") return;
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("orientationchange", handleResize);
  if (rafId !== null) {
    window.cancelAnimationFrame(rafId);
    rafId = null;
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
