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
    "aff-card flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1 md:gap-5 md:p-10 xl:gap-7 xl:p-14";

  return (
    <section className="pt-0 pb-12 sm:pt-2 sm:pb-14 lg:pt-4">
      <Container className="max-w-none sm:max-w-[min(96rem,92vw)]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 md:gap-12 xl:gap-16"
        >
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={item}
              className={`${baseCard} ${
                i === 2
                  ? "md:col-span-2 md:mx-auto md:max-w-4xl xl:max-w-5xl"
                  : ""
              }`}
            >
              <Icon className="h-12 w-12 text-red md:h-14 md:w-14" />
              <div>
                <h3 className="font-body text-2xl font-semibold text-neutral-900 md:text-[1.75rem]">
                  {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-neutral-600 md:text-lg md:leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

