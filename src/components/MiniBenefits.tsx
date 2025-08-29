"use client";

import Container from "@/components/Container";
import { Search, Hourglass, Zap } from "lucide-react";
import { motion } from "framer-motion";

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
      transition: { staggerChildren: 0.06 },
    },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  } as const;

const card =
  "flex items-center gap-4 rounded-full bg-gradient-to-r from-red-dim to-red p-4 shadow-[0_0_20px_rgba(229,9,20,0.25)]";

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={item} className={card}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red">
                <Icon className="h-5 w-5 text-white" />
              </span>
              <div>
                <h3 className="font-jakarta font-semibold text-lg leading-snug">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

