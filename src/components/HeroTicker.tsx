"use client";

import type { CSSProperties } from "react";
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
const REPEATS_PER_HALF = 6;

// Costruiamo una metà molto lunga duplicando gli item
const half = Array.from({ length: REPEATS_PER_HALF }).flatMap(() => items);

// Traccia completa = due metà identiche (necessario per il loop a -50%)
const track = [...half, ...half];

export default function HeroTicker() {
  return (
    <div
      className="group relative left-1/2 mt-24 w-screen max-w-none -translate-x-1/2 overflow-hidden sm:mt-28 lg:mt-28 xl:mt-32 2xl:mt-36"
      style={{ "--marquee-duration": "60s" } as CSSProperties}
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
              className={`pointer-events-none inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-body backdrop-blur-md shadow-sm lg:px-5 lg:py-2.5 lg:text-base ${accentClass}`}
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

