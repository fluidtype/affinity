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
    <motion.section className="bg-[#050506] py-12 sm:py-16 lg:py-20" {...sectionProps}>
      <Container className="text-center">
        <h2 className="relative mx-auto inline-block font-heading font-extrabold tracking-[-0.5px] text-3xl">
          <span className="absolute -inset-4 -z-10 rounded-full bg-red/20 blur-2xl" />
          Perché non è l’ennesimo corso da 1500€
        </h2>
        <p className="mx-auto mt-4 max-w-[60ch] text-muted">
          I guru ti vendono promesse vaghe e corsi costosi pieni di fuffa.
          Noi abbiamo condensato il meglio da 500+ studi di psicologia in un percorso chiaro e applicabile da subito.
          Nessun filler — solo ciò che funziona davvero.
        </p>
      </Container>
    </motion.section>
  );
}

