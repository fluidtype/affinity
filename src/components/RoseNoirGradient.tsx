// components/RoseNoirGradient.tsx
import React from "react";

/**
 * Animated diagonal gradient stripe (Rosé Noir).
 * Non-interactive, sits behind existing hero content.
 * Safe for sticky/fixed UI because it uses -z-10 and pointer-events-none.
 */
export default function RoseNoirGradient() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Diagonal stripe that "cuts" the screen */}
      <div className="affinity-diagonal-stripe">
        {/* Animated multi-blob gradient */}
        <div className="affinity-blob-layer affinity-animate-gradient" />
      </div>
    </div>
  );
}
