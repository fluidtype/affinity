"use client";

import { Brain, Gift, Key, Users } from "lucide-react";

const items = [
  { icon: Brain, label: "Basato su studi scientifici" },
  { icon: Gift, label: "Risultato gratuito" },
  { icon: Key, label: "Strategie Premium" },
  { icon: Users, label: "+20.000 utenti" },
];

export default function HeroTicker() {
  return (
    <div className="mask-fade-x relative mt-8 w-full overflow-hidden">
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {items.map((item, idx) => (
          <div
            key={`main-${idx}`}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-jakarta text-white/90 shadow-sm"
          >
            <item.icon className="h-4 w-4 text-red" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div
        className="absolute top-0 flex w-max animate-marquee2 gap-4 hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        {items.map((item, idx) => (
          <div
            key={`dup-${idx}`}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-jakarta text-white/90 shadow-sm"
          >
            <item.icon className="h-4 w-4 text-red" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
