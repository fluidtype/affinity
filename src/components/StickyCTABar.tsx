"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CTAButton from "@/components/CTAButton";

export default function StickyCTABar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className="pointer-events-none fixed inset-x-4 bottom-4 z-50 md:hidden sm:inset-x-6 sm:bottom-6 pb-[env(safe-area-inset-bottom)]"
      style={{ touchAction: "pan-y" }}
    >
      <div className="pointer-events-none mx-auto w-full max-w-screen-sm rounded-2xl bg-bg/80 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur supports-[backdrop-filter]:backdrop-blur sm:max-w-screen-md">
        <CTAButton
          href="/test"
          className="pointer-events-auto w-full max-w-full !flex select-none justify-center !px-5 !py-3 text-base"
          data-disable-motion-on-touch
        >
          Inizia gratis
        </CTAButton>
      </div>
    </div>,
    document.body
  );
}
