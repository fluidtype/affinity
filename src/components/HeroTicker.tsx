"use client";

import type { CSSProperties } from "react";
import { Brain, Gift, Key, Users } from "lucide-react";

const items = [
  { icon: Brain, label: "Basato su studi scientifici" },
  { icon: Gift,  label: "Risultato gratuito" },
  { icon: Key,   label: "Strategie Premium" },
  { icon: Users, label: "+20.000 utenti" },
];

// Quante volte ripetere il set per OGNI metà (aumenta se servono schermi più larghi)
const REPEATS_PER_HALF = 6;

// Costruiamo una metà molto lunga duplicando gli item
const half = Array.from({ length: REPEATS_PER_HALF }).flatMap(() => items);

// Traccia completa = due metà identiche (necessario per il loop a -50%)
const track = [...half, ...half];

export default function HeroTicker() {
  return (
    <div
      className="group relative mt-24 w-full max-w-none overflow-hidden sm:mt-28 lg:mt-32 xl:mt-36"
      style={{ "--marquee-duration": "60s" } as CSSProperties}
    >
      <div
        className="
          flex w-max animate-marquee select-none whitespace-nowrap
          gap-3 motion-reduce:animate-none group-hover:[animation-play-state:paused] sm:gap-4
        "
      >
        {track.map((item, idx) => (
          <div
            key={`${item.label}-${idx}`}
            className="
              pointer-events-none inline-flex shrink-0 items-center gap-2
              whitespace-nowrap rounded-full border border-white/10
              bg-black/20 px-4 py-2 text-sm font-body text-white/90 shadow-sm
            "
            aria-hidden={idx >= half.length} /* la seconda metà serve solo per il loop */
          >
            <item.icon className="h-4 w-4 text-red" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

