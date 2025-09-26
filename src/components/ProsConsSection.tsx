"use client";

import Container from "@/components/Container";
import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ProsConsSection() {
  const sectionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  } as const;
  const card =
    "aff-card relative overflow-hidden text-center transition-transform hover:-translate-y-1 md:text-left md:p-10 xl:p-12";
  return (
    <motion.section
      id="perche-affinity"
      className="py-10 sm:py-14 scroll-mt-16 md:scroll-mt-20"
      {...sectionProps}
    >
      <Container className="max-w-[min(108rem,92vw)]">
        <div className="text-center">
          <h2 className="font-heading font-bold tracking-[-0.5px] text-3xl">Perché Affinity è diverso da tutto il resto</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white">
            Niente opinioni. Solo ciò che la scienza e l’esperienza reale dimostrano.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10 xl:gap-12">
          <motion.div
            className={card}
            {...{ transition: { delay: 0.1 } }}
          >
            <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 md:mx-0">
              <span className="absolute inset-0 -z-10 rounded-full bg-white/20 blur-lg" />
              <X className="h-10 w-10 text-white animate-icon-bounce" />
            </div>
            <h3 className="font-body font-semibold text-white">Problemi</h3>
            <ul className="mt-4 space-y-3 text-base text-white/80 text-left">
              <li>Attiri sempre le persone sbagliate e finisce nello stesso modo.</li>
              <li>Dopo poco perdono interesse e non capisci perché.</li>
              <li>Su Google e TikTok trovi solo consigli banali e contraddittori.</li>
              <li>Ti senti in ritardo rispetto a chi sembra avere relazioni migliori.</li>
              <li>I guru ti spillano 1.500€ per corsi pieni di fuffa, senza risposte concrete.</li>
            </ul>
          </motion.div>
          <motion.div
            className={card}
            {...{ transition: { delay: 0.2 } }}
          >
            <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 md:mx-0">
              <span className="absolute inset-0 -z-10 rounded-full bg-white/20 blur-lg" />
              <Check className="h-10 w-10 text-white animate-icon-bounce" />
            </div>
            <h3 className="font-body font-semibold text-white">Soluzioni</h3>
            <ul className="mt-4 space-y-3 text-base text-white/80 text-left">
              <li>Scopri subito perché ti accade sempre lo stesso schema.</li>
              <li>Capisci i tuoi errori nascosti e come smettere di ripeterli.</li>
              <li>Accedi alla Guida Premium: 500+ libri e studi tradotti in strategie chiare.</li>
              <li>Smonti illusioni e vedi la realtà delle relazioni.</li>
              <li>Ti risparmi anni di tentativi, dubbi e sofferenze.</li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
