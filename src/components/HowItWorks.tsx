"use client";

import Container from "@/components/Container";
import { FileText, BarChart2, Key } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const sectionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  } as const;
  const card =
    "aff-card relative text-center transition-transform hover:-translate-y-1 md:text-left";
  return (
    <motion.section
      id="come-funziona"
      className="py-10 sm:py-14 scroll-mt-16 md:scroll-mt-20"
      {...sectionProps}
    >
      <Container className="text-center">
        <h2 className="font-heading font-bold tracking-[-0.5px] text-3xl">Come funziona Affinity?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white">
          Gratis il test, Premium la guida: insieme formano il percorso più rapido per capire e cambiare la tua vita amorosa.
        </p>
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 h-full w-px bg-red/40 md:hidden" />
          <div className="absolute top-1/2 hidden h-px w-full bg-red/40 md:block" />
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              className={card}
              {...{ transition: { delay: 0.1 } }}
            >
              <FileText className="mx-auto h-8 w-8 text-white animate-icon-bounce" />
              <h3 className="mt-4 font-body text-lg font-semibold text-white">Rispondi al test</h3>
              <p className="mt-2 text-sm text-white/80">30 domande, meno di 5 minuti.</p>
            </motion.div>
            <motion.div
              className={card}
              {...{ transition: { delay: 0.2 } }}
            >
              <BarChart2 className="mx-auto h-8 w-8 text-white animate-icon-bounce" />
              <h3 className="mt-4 font-body text-lg font-semibold text-white">Scopri il tuo profilo</h3>
              <p className="mt-2 text-sm text-white/80">
                Punti di forza, errori invisibili e schemi che ti sabotano.
              </p>
            </motion.div>
            <motion.div
              className={card}
              {...{ transition: { delay: 0.3 } }}
            >
              <Key className="mx-auto h-8 w-8 text-white animate-icon-bounce" />
              <h3 className="mt-4 font-body text-lg font-semibold text-white">Sblocca la Guida Premium</h3>
              <p className="mt-2 text-sm text-white/80">Oltre 500 libri, studi e meta-analisi condensati in strategie pratiche e applicabili.</p>
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
