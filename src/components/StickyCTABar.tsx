"use client";

import CTAButton from "@/components/CTAButton";

export default function StickyCTABar() {
  return (
    <div className="pointer-events-none fixed inset-x-4 bottom-4 z-40 md:hidden sm:inset-x-6 sm:bottom-6 pb-[env(safe-area-inset-bottom)]">
      <div className="pointer-events-none mx-auto w-full max-w-screen-sm rounded-2xl bg-bg/80 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur supports-[backdrop-filter]:backdrop-blur sm:max-w-screen-md">
        <CTAButton
          href="/test"
          className="pointer-events-auto w-full max-w-full !flex justify-center !px-5 !py-3 text-base"
        >
          Inizia gratis
        </CTAButton>
      </div>
    </div>
  );
}
