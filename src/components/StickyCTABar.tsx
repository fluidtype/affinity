"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import CTAButton from "@/components/CTAButton";
import { CTA_COPY } from "@/lib/constants";
import { track } from "@/lib/track";
import { useScrollProgress } from "@/lib/useScrollProgress";

export default function StickyCTABar() {
  const [mounted, setMounted] = useState(false);
  const [tracked, setTracked] = useState(false);
  const { progress, stickyThreshold } = useScrollProgress();
  const visible = progress >= stickyThreshold;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (visible && !tracked) {
      track("sticky_shown", { progress: stickyThreshold });
      setTracked(true);
    }
  }, [visible, tracked, stickyThreshold]);

  const ctaContent = useMemo(
    () => (
      <div className="pointer-events-none mx-auto w-full max-w-screen-sm rounded-2xl border border-white/15 bg-black/80 px-4 py-3 shadow-[0_20px_45px_rgba(0,0,0,0.6)] backdrop-blur supports-[backdrop-filter]:backdrop-blur sm:max-w-screen-md">
        <CTAButton
          href="/test"
          className="pointer-events-auto w-full max-w-full !flex justify-center !px-5 !py-3 text-base"
          onClick={() => track("cta_click_sticky")}
        >
          {CTA_COPY}
        </CTAButton>
      </div>
    ),
    [],
  );

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      className={`pointer-events-none fixed inset-x-4 bottom-4 z-50 transition-transform transition-opacity duration-300 ease-out md:hidden sm:inset-x-6 sm:bottom-6 pb-[calc(env(safe-area-inset-bottom)+12px)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      style={{ touchAction: "pan-y" }}
    >
      {ctaContent}
    </div>,
    document.body,
  );
}
