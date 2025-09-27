"use client";

import Container from "@/components/Container";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Manifesto() {
  const sectionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  } as const;

  return (
    <motion.section className="py-10 sm:py-14" {...sectionProps}>
      <Container className="flex justify-center">
        <div className="aff-card relative max-w-5xl text-center text-white">
          <Heart className="mx-auto mb-6 h-8 w-8 text-red" />
          <h2 className="relative mx-auto inline-block font-heading text-3xl font-bold tracking-[-0.5px] leading-tight text-white sm:text-4xl">
            Perché abbiamo creato Affinity
            <motion.span
              className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-red"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-white">
            L’amore oggi è fatto di swipe. Superficiale, fugace.
            Noi ci siamo persi lì: relazioni che ripetono sempre lo stesso film.
            Affinity nasce per farti ricentrare, far crescere <span className="font-semibold text-white">legami veri</span>.
            È la <span className="font-semibold text-white">mappa</span> che avremmo voluto avere. Ora è qui, per te.
          </p>
        </div>
      </Container>
    </motion.section>
  );
}

