"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CTAButton from "@/components/CTAButton";
import { CTA_COPY } from "@/lib/constants";
import { track } from "@/lib/track";

export default function StickyCTABar() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        const shouldShow = progress >= 0.45;
        setVisible(shouldShow);
        if (shouldShow && !tracked) {
          track("sticky_shown", { progress: 0.45 });
          setTracked(true);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tracked]);

  if (!mounted || !visible) {
    return null;
  }

  return createPortal(
    <div
      className="pointer-events-none fixed inset-x-4 bottom-4 z-50 md:hidden sm:inset-x-6 sm:bottom-6 pb-[calc(env(safe-area-inset-bottom)+12px)]"
      style={{ touchAction: "pan-y" }}
    >
      <div className="pointer-events-none mx-auto w-full max-w-screen-sm rounded-2xl bg-bg/80 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur supports-[backdrop-filter]:backdrop-blur sm:max-w-screen-md">
        <CTAButton
          href="/test"
          className="pointer-events-auto w-full max-w-full !flex justify-center !px-5 !py-3 text-base"
          onClick={() => track("cta_click_sticky")}
        >
          {CTA_COPY}
        </CTAButton>
      </div>
    </div>,
    document.body,
  );
}
