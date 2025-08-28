"use client";

import Container from "@/components/Container";
import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ProsConsSection() {
  const sectionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  } as const;
  const card =
    "relative overflow-hidden rounded-2xl border border-[#333] bg-white/5 p-6 text-left backdrop-blur-sm shadow-lg shadow-black/20 transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30";
  return (
    <motion.section
      id="perche-affinity"
      className="relative py-20 before:absolute before:inset-x-0 before:-top-10 before:h-10 before:bg-gradient-to-b before:from-black before:to-transparent before:content-['']"
      {...sectionProps}
    >
      <Container className="text-center">
        <h2 className="font-heading text-3xl">Perché scegliere Affinity?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Non un altro test. Una scorciatoia verso la verità delle relazioni.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            className={card + " before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-red-500/20 before:blur-xl"}
            {...{ transition: { delay: 0.1 } }}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red/10">
                <X className="h-5 w-5 text-red animate-icon-bounce" />
              </span>
              <h3 className="font-jakarta font-semibold">Problemi</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Consigli generici e contraddittori</li>
              <li>Confusione sui propri punti di forza</li>
              <li>Tempo perso tra prove ed errori</li>
            </ul>
          </motion.div>
          <motion.div
            className={card + " before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-green-500/20 before:blur-xl"}
            {...{ transition: { delay: 0.2 } }}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                <Check className="h-5 w-5 text-green-500 animate-icon-bounce" />
              </span>
              <h3 className="font-jakarta font-semibold">Soluzioni</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Indicazioni chiare basate sui dati</li>
              <li>Profilo su misura in pochi minuti</li>
              <li>Strategie pratiche da applicare subito</li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
