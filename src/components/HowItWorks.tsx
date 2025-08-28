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
    "relative rounded-2xl border border-[#333] bg-white/5 p-6 text-center backdrop-blur-sm shadow-lg shadow-black/20 transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30";
  return (
    <motion.section
      id="come-funziona"
      className="relative py-20 before:absolute before:inset-x-0 before:-top-px before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#FF2D2D] before:to-transparent before:blur-sm before:content-['']"
      {...sectionProps}
    >
      <Container className="text-center">
        <h2 className="font-heading font-extrabold tracking-[-0.5px] text-3xl">Come funziona Affinity?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Un test semplice e scientifico che ti mostra chi sei davvero nelle relazioni.
        </p>
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 h-full w-px bg-red/40 md:hidden" />
          <div className="absolute top-1/2 hidden h-px w-full bg-red/40 md:block" />
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              className={card}
              {...{ transition: { delay: 0.1 } }}
            >
              <FileText className="mx-auto h-8 w-8 text-red animate-icon-bounce" />
              <h3 className="mt-4 font-jakarta text-lg">Rispondi al test gratuito</h3>
              <p className="mt-2 text-sm text-gray-400">30 domande, meno di 5 minuti.</p>
            </motion.div>
            <motion.div
              className={card}
              {...{ transition: { delay: 0.2 } }}
            >
              <BarChart2 className="mx-auto h-8 w-8 text-red animate-icon-bounce" />
              <h3 className="mt-4 font-jakarta text-lg">Ottieni il tuo profilo</h3>
              <p className="mt-2 text-sm text-gray-400">
                Punti di forza, aree da migliorare, grafici chiari.
              </p>
            </motion.div>
            <motion.div
              className={card}
              {...{ transition: { delay: 0.3 } }}
            >
              <Key className="mx-auto h-8 w-8 text-red animate-icon-bounce" />
              <h3 className="mt-4 font-jakarta text-lg">Sblocca la Guida Premium</h3>
              <p className="mt-2 text-sm text-gray-400">Sintesi di 50+ libri e studi.</p>
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
