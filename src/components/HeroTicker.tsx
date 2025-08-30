"use client";

import type { CSSProperties } from "react";
import { Brain, Gift, Key, Users } from "lucide-react";

const items = [
  { icon: Brain, label: "Basato su studi scientifici" },
  { icon: Gift, label: "Risultato gratuito" },
  { icon: Key, label: "Strategie Premium" },
  { icon: Users, label: "+20.000 utenti" },
];

export default function HeroTicker() {
  return (
    <div
      className="group mask-fade-x relative mt-20 w-full overflow-hidden"
      style={{ "--marquee-duration": "25s" } as CSSProperties}
    >
      <div
        className="flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]"
        style={{ animationDuration: "var(--marquee-duration)" }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="pointer-events-none mr-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-jakarta text-white/90 shadow-sm last:mr-0"
          >
            <item.icon className="h-4 w-4 text-red" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]"
        aria-hidden="true"
        style={{
          animationDuration: "var(--marquee-duration)",
          animationDelay: "calc(var(--marquee-duration) / 2)",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="pointer-events-none mr-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-jakarta text-white/90 shadow-sm last:mr-0"
          >
            <item.icon className="h-4 w-4 text-red" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
