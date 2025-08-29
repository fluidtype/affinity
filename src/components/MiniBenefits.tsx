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
    "relative rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm shadow-lg shadow-black/20 before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-red/20 before:blur-xl";

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
            <motion.div key={title} variants={item} className={`${card}`}>
              <Icon className="mb-4 h-10 w-10 text-red" />
              <h3 className="font-jakarta font-semibold text-base">{title}</h3>
              <p className="mt-2 text-sm text-muted">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

