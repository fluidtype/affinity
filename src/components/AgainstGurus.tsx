"use client";

import Container from "@/components/Container";
import { BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function AgainstGurus() {
  const sectionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  } as const;

  return (
    <motion.section className="py-10 sm:py-14" {...sectionProps}>
      <Container className="flex justify-center">
        <div className="relative max-w-5xl overflow-hidden rounded-3xl border border-red/40 bg-white/5 p-8 sm:p-10 backdrop-blur-md">
          <BadgeDollarSign className="mx-auto mb-6 h-8 w-8 text-white/80" />
          <h2 className="text-center font-heading text-3xl font-bold leading-tight sm:text-4xl">
            Perché non è l’ennesimo corso da 1500€
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-300 leading-relaxed">
            I guru ti vendono promesse vaghe e corsi costosi pieni di fuffa.
            Noi abbiamo condensato il meglio da <span className="text-red">500+ studi</span> di psicologia in un percorso chiaro e applicabile da subito.
            Nessun filler — <span className="text-red">solo ciò che funziona davvero</span>.
          </p>
        </div>
      </Container>
    </motion.section>
  );
}

