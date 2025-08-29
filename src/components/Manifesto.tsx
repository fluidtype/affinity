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
    <motion.section className="py-12 sm:py-16" {...sectionProps}>
      <Container className="flex justify-center">
        <div className="relative max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red/10 to-transparent" />
          <h2 className="relative mx-auto inline-block font-heading text-3xl font-extrabold tracking-[-0.5px] sm:text-4xl">
            Perché abbiamo creato Affinity
            <motion.span
              className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-red"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-muted">
            L’amore oggi è fatto di swipe. Superficiale, fugace.
            Noi ci siamo persi lì: relazioni che ripetono sempre lo stesso film.
            Affinity nasce per farti ricentrare, far crescere legami veri.
            È la mappa che avremmo voluto avere. Ora è qui, per te.
          </p>
        </div>
      </Container>
    </motion.section>
  );
}

