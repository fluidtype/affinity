"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { useIsMobileSafari } from "@/lib/useIsMobileSafari";
import { Brain, Gift, Key, Users } from "lucide-react";

const items = [
  { icon: Brain, label: "Basato su studi scientifici" },
  { icon: Gift, label: "Risultato gratuito" },
  { icon: Key, label: "Strategie Premium" },
  { icon: Users, label: "+20.000 utenti" },
];

const ACCENT_FREQUENCY = 7;
const ACCENT_OFFSET = 3;
const ACCENT_COLORS = ["text-white", "text-red"] as const;

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
  const isMobileSafari = useIsMobileSafari();

  const half = useMemo(
    () => Array.from({ length: repeatsPerHalf }).flatMap(() => items),
    [repeatsPerHalf],
  );

  const track = useMemo(() => [...half, ...half], [half]);

  return (
    <div
      className="group relative mx-auto mt-[clamp(2rem,5vh,4rem)] w-full max-w-none overflow-hidden"
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
          const accentIndex = Math.floor((idx + ACCENT_OFFSET) / ACCENT_FREQUENCY) % ACCENT_COLORS.length;
          const accentClass = isAccent ? ACCENT_COLORS[accentIndex] : "text-white/80";

          return (
            <div
              key={`${item.label}-${idx}`}
              className={`pointer-events-none inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 px-4 py-2 text-sm font-body shadow-sm lg:px-5 lg:py-2.5 lg:text-base ${
                isMobileSafari
                  ? "bg-white/12"
                  : "bg-white/10 supports-[backdrop-filter]:backdrop-blur-md"
              } ${accentClass}`}
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

