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
        <div className="aff-card relative max-w-5xl text-center">
          <BadgeDollarSign className="mx-auto mb-6 h-8 w-8 text-white" />
          <h2 className="text-center font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            Perché non è l’ennesimo corso da 1500€
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-white/80">
            I guru ti vendono promesse vaghe e corsi costosi pieni di fuffa.
            Noi abbiamo condensato il meglio da <span className="font-semibold text-white">500+ studi</span> di psicologia in un percorso chiaro e applicabile da subito.
            Nessun filler — <span className="font-semibold text-white">solo ciò che funziona davvero</span>.
          </p>
        </div>
      </Container>
    </motion.section>
  );
}

