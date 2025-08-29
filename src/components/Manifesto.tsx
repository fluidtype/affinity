"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";

export default function Manifesto() {
  const sectionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  } as const;

  return (
    <motion.section className="py-12 sm:py-16 lg:py-20" {...sectionProps}>
      <Container className="text-center">
        <h2 className="relative mx-auto inline-block font-heading font-extrabold tracking-[-0.5px] text-3xl">
          <span className="absolute -inset-4 -z-10 rounded-full bg-red/20 blur-2xl" />
          Perché abbiamo creato Affinity
        </h2>
        <p className="mx-auto mt-4 max-w-[60ch] text-muted">
          L’amore oggi è fatto di swipe. Superficiale, fugace.
          Noi ci siamo persi lì: relazioni che ripetono sempre lo stesso film.
          Affinity nasce per farti ricentrare, far crescere legami veri.
          È la mappa che avremmo voluto avere. Ora è qui, per te.
        </p>
      </Container>
    </motion.section>
  );
}

