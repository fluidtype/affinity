"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Quanto dura il test?",
    a: "Meno di 5 minuti, 30 domande veloci.",
  },
  {
    q: "È scientifico?",
    a: "Sì. Il test è basato su psicologia reale. La Guida Premium condensa oltre 500 libri, studi e meta-analisi.",
  },
  {
    q: "Che cos’è la Guida Premium?",
    a: "Il concentrato delle strategie più potenti mai scritte su attrazione e relazioni. Quello che i guru vendono a 1.500€, qui è chiaro e subito applicabile.",
  },
  {
    q: "Perché non basta cercare su Google?",
    a: "Perché online trovi solo pezzi sparsi e contraddittori. Affinity ti dà una mappa chiara e unica.",
  },
  {
    q: "Serve fare il test per la Guida Premium?",
    a: "Il test ti fa capire da dove parti. La Guida ti fornisce le strategie per cambiare davvero. Funzionano meglio insieme.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  } as const;
  return (
    <motion.section id="faq" className="py-10 sm:py-14" {...sectionProps}>
      <Container>
        <h2 className="text-center font-heading font-extrabold tracking-[-0.5px] text-3xl">Domande frequenti</h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-[#333] bg-white/5 p-4 backdrop-blur-sm shadow-lg shadow-black/20"
              >
                <button
                  className="flex w-full items-center justify-between text-left font-jakarta"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 opacity-80 animate-icon-bounce" />
                    {f.q}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-sm text-muted">{f.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </motion.section>
  );
}
