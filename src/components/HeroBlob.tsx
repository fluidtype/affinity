import React from "react";

export default function HeroBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[60vw] max-h-[800px] w-[60vw] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red opacity-40 blur-[120px] animate-blob" />
    </div>
  );
}
