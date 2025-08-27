"use client";

import CTAButton from "@/components/CTAButton";

export default function StickyCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-bg/80 px-4 py-3 backdrop-blur md:hidden">
      <CTAButton href="/test" className="w-full py-3">
        Inizia gratis
      </CTAButton>
    </div>
  );
}
