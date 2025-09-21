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
    "relative overflow-hidden rounded-2xl border border-[#333] bg-white/5 p-8 md:p-6 text-center md:text-left backdrop-blur-sm transition-transform hover:-translate-y-1";
  return (
    <motion.section id="perche-affinity" className="py-10 sm:py-14" {...sectionProps}>
      <Container className="text-center">
        <h2 className="font-heading font-extrabold tracking-[-0.5px] text-3xl">Perché Affinity è diverso da tutto il resto</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Niente opinioni. Solo ciò che la scienza e l’esperienza reale dimostrano.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-6">
          <motion.div
            className={
              card +
              " hover:shadow-[0_0_24px_rgba(229,9,20,0.35)] before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-red-500/10 before:blur-xl"
            }
            {...{ transition: { delay: 0.1 } }}
          >
            <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 md:mx-0">
              <span className="absolute inset-0 -z-10 rounded-full bg-red/20 blur-lg" />
              <X className="h-10 w-10 text-red animate-icon-bounce" />
            </div>
            <h3 className="font-jakarta font-semibold">Problemi</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted text-left">
              <li>Attiri sempre le persone sbagliate e finisce nello stesso modo.</li>
              <li>Dopo poco perdono interesse e non capisci perché.</li>
              <li>Su Google e TikTok trovi solo consigli banali e contraddittori.</li>
              <li>Ti senti in ritardo rispetto a chi sembra avere relazioni migliori.</li>
              <li>I guru ti spillano 1.500€ per corsi pieni di fuffa, senza risposte concrete.</li>
            </ul>
          </motion.div>
          <motion.div
            className={
              card +
              " hover:shadow-[0_0_24px_rgba(34,197,94,0.35)] before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-green-500/10 before:blur-xl"
            }
            {...{ transition: { delay: 0.2 } }}
          >
            <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 md:mx-0">
              <span className="absolute inset-0 -z-10 rounded-full bg-green-500/20 blur-lg" />
              <Check className="h-10 w-10 text-green-500 animate-icon-bounce" />
            </div>
            <h3 className="font-jakarta font-semibold">Soluzioni</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted text-left">
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
