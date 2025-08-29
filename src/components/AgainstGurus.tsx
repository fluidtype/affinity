"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";

export default function AgainstGurus() {
  const sectionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  } as const;

  return (
    <motion.section className="py-12 sm:py-16 lg:py-20" {...sectionProps}>
      <Container className="flex justify-center">
        <div className="relative max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <span className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-red/20 blur-2xl" />
          <h2 className="mb-4 flex items-center justify-center gap-2 font-heading text-3xl font-extrabold tracking-[-0.5px] sm:text-4xl">
            <span className="text-red">💡</span>
            Perché non è l’ennesimo corso da 1500€
          </h2>
          <p className="mx-auto max-w-[60ch] text-muted">
            I guru ti vendono promesse vaghe e corsi costosi pieni di fuffa.
            Noi abbiamo condensato il meglio da 500+ studi di psicologia in un percorso chiaro e applicabile da subito.
            Nessun filler — solo ciò che funziona davvero.
          </p>
        </div>
      </Container>
    </motion.section>
  );
}

