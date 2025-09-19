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
        <div className="relative max-w-5xl overflow-hidden rounded-3xl border border-red/40 bg-white/5 p-8 sm:p-10 text-center backdrop-blur-md">
          <Heart className="mx-auto mb-6 h-8 w-8 text-white/80" />
          <h2 className="relative mx-auto inline-block font-heading text-3xl font-bold tracking-[-0.5px] leading-tight sm:text-4xl">
            Perché abbiamo creato Affinity
            <motion.span
              className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-red"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-300 leading-relaxed">
            L’amore oggi è fatto di swipe. Superficiale, fugace.
            Noi ci siamo persi lì: relazioni che ripetono sempre lo stesso film.
            Affinity nasce per farti ricentrare, far crescere <span className="text-red">legami veri</span>.
            È la <span className="text-red">mappa</span> che avremmo voluto avere. Ora è qui, per te.
          </p>
        </div>
      </Container>
    </motion.section>
  );
}

