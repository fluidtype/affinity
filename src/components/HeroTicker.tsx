"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Brain, Gift, Key, Users } from "lucide-react";

const items = [
  { icon: Brain, label: "Basato su studi scientifici" },
  { icon: Gift, label: "Risultato gratuito" },
  { icon: Key, label: "Strategie Premium" },
  { icon: Users, label: "+20.000 utenti" },
];

const ACCENT_FREQUENCY = 7;
const ACCENT_OFFSET = 3;
const ACCENT_VARIANTS = [
  "border-white/40 bg-white/15 shadow-[0_0_30px_rgba(255,70,120,0.35)]",
  "border-white/25 bg-black/50",
] as const;

// Quante volte ripetere il set per OGNI metà (aumenta se servono schermi più larghi)
const BASE_REPEATS_PER_HALF = 6;
const ESTIMATED_ITEM_WIDTH = 240; // px, usato solo per un calcolo grossolano

function useResponsiveRepeats() {
  const [repeats, setRepeats] = useState(BASE_REPEATS_PER_HALF);

  useEffect(() => {
    const updateRepeats = () => {
      if (typeof window === "undefined") return;
      const viewportWidth = window.innerWidth;
      const estimatedNeeded = Math.ceil(viewportWidth / ESTIMATED_ITEM_WIDTH) + 2;

      setRepeats(Math.max(BASE_REPEATS_PER_HALF, estimatedNeeded));
    };

    updateRepeats();
    window.addEventListener("resize", updateRepeats);

    return () => window.removeEventListener("resize", updateRepeats);
  }, []);

  return repeats;
}

export default function HeroTicker() {
  const repeatsPerHalf = useResponsiveRepeats();

  const half = useMemo(
    () => Array.from({ length: repeatsPerHalf }).flatMap(() => items),
    [repeatsPerHalf],
  );

  const track = useMemo(() => [...half, ...half], [half]);

  return (
    <div
      className="group relative mx-auto mt-[clamp(2rem,5vh,4rem)] w-full max-w-none overflow-hidden lg:mt-[calc(clamp(2rem,5vh,4rem)+2cm)]"
      style={
        {
          "--marquee-duration": "60s",
          maxWidth: "100%",
          width: "100%",
        } as CSSProperties
      }
    >
      <div
        className="
          flex w-max animate-marquee select-none whitespace-nowrap
          gap-3 motion-reduce:animate-none group-hover:[animation-play-state:paused] sm:gap-4 lg:gap-6
        "
      >
        {track.map((item, idx) => {
          const isAccent = (idx + ACCENT_OFFSET) % ACCENT_FREQUENCY === 0;
          const accentIndex = Math.floor((idx + ACCENT_OFFSET) / ACCENT_FREQUENCY) % ACCENT_VARIANTS.length;
          const accentClass = isAccent
            ? ACCENT_VARIANTS[accentIndex]
            : "border-white/20 bg-black/40 backdrop-blur";

          return (
            <div
              key={`${item.label}-${idx}`}
              className={`pointer-events-none inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-body text-white shadow-[0_12px_30px_rgba(0,0,0,0.4)] backdrop-blur lg:px-5 lg:py-2.5 lg:text-base ${accentClass}`}
              aria-hidden={idx >= half.length} /* la seconda metà serve solo per il loop */
            >
              <item.icon className="h-4 w-4 text-red" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

