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
    "rounded-2xl border border-[#333] bg-white/5 p-6 text-center transition-transform hover:-translate-y-1";
  return (
    <motion.section id="come-funziona" className="py-24" {...sectionProps}>
      <Container className="text-center">
        <h2 className="font-heading text-3xl">Come funziona Affinity?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Un test semplice e scientifico che ti mostra chi sei davvero nelle relazioni.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className={card}>
            <FileText className="mx-auto h-8 w-8 text-red" />
            <h3 className="mt-4 font-jakarta text-lg">Rispondi al test gratuito</h3>
            <p className="mt-2 text-sm text-gray-400">30 domande, meno di 5 minuti.</p>
          </div>
          <div className={card}>
            <BarChart2 className="mx-auto h-8 w-8 text-red" />
            <h3 className="mt-4 font-jakarta text-lg">Ottieni il tuo profilo</h3>
            <p className="mt-2 text-sm text-gray-400">
              Punti di forza, aree da migliorare, grafici chiari.
            </p>
          </div>
          <div className={card}>
            <Key className="mx-auto h-8 w-8 text-red" />
            <h3 className="mt-4 font-jakarta text-lg">Sblocca la Guida Premium</h3>
            <p className="mt-2 text-sm text-gray-400">Sintesi di 50+ libri e studi.</p>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
