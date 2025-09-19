"use client";

import Container from "@/components/Container";
import { Search, Hourglass, Zap } from "lucide-react";
import { motion } from "framer-motion";

const reduce =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const items = [
  {
    icon: Search,
    title: "Scopri i tuoi errori nascosti",
    desc: "finché non li vedi, continuerai a ripetere gli stessi schemi che distruggono ogni relazione.",
  },
  {
    icon: Hourglass,
    title: "Evita di sprecare anni",
    desc: "senza una mappa chiara, rimarrai intrappolato tra tentativi, delusioni e storie che finiscono sempre uguale.",
  },
  {
    icon: Zap,
    title: "Rompi il ciclo prima che sia troppo tardi",
    desc: "ogni relazione fallita lascia cicatrici: più aspetti, più diventa difficile ricominciare davvero.",
  },
];

export default function MiniBenefits() {
  const container = {
    hidden: {},
    show: {
      transition: reduce ? { staggerChildren: 0 } : { staggerChildren: 0.06 },
    },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { duration: 0.6 },
    },
  } as const;

const baseCard =
  "flex flex-col gap-4 rounded-2xl border-2 border-red/50 bg-black/20 p-6 transition hover:shadow-[0_0_20px_rgba(229,9,20,0.35)]";

  return (
    <section className="pt-0 pb-12 sm:pt-2 sm:pb-14">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid gap-6 md:grid-cols-2"
        >
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={item}
              className={`${baseCard} ${
                i === 2 ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""
              }`}
            >
              <Icon className="h-10 w-10 text-white/80" />
              <div>
                <h3 className="font-jakarta text-xl font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#B3B3B3]">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

