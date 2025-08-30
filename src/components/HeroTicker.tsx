"use client";

import { Brain, Gift, Key, Users } from "lucide-react";

const items = [
  { icon: Brain, label: "Basato su studi scientifici" },
  { icon: Gift, label: "Risultato gratuito" },
  { icon: Key, label: "Strategie Premium" },
  { icon: Users, label: "+20.000 utenti" },
];

export default function HeroTicker() {
  const duplicated = items.concat(items);

  return (
    <div className="group mask-fade-x relative mt-20 w-full overflow-hidden">
      <div className="flex w-max animate-marquee gap-4 motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {duplicated.map((item, idx) => (
          <div
            key={idx}
            className="pointer-events-none flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-jakarta text-white/90 shadow-sm"
          >
            <item.icon className="h-4 w-4 text-red" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
