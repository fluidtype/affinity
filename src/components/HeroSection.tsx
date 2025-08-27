"use client";

import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import { FlaskConical, Gift, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section className="relative flex h-[calc(100vh-4rem)] items-center">
      <Container className="flex flex-col items-center justify-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-jakarta text-white/90 backdrop-blur"
          >
          +20.000 persone hanno già fatto il test
          </motion.div>
          <motion.h1
            variants={item}
            className="mx-auto mt-4 max-w-[820px] font-heading text-4xl leading-tight md:text-5xl"
          >
            Il test che rivela la tua vera personalità nelle relazioni
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-[720px] text-gray-400"
          >
            Basato su oltre 50 studi e libri di psicologia dell’attrazione. Scopri il tuo profilo in 5 minuti. Gratis.
          </motion.p>
          <motion.div variants={item} className="mt-10">
            <CTAButton href="/test" className="px-10 py-5 text-lg">
              Inizia il test gratuito
            </CTAButton>
          </motion.div>
          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap justify-center gap-3 md:gap-6"
          >
            <div className="flex items-center gap-2 rounded-[18px] border border-[#333] bg-white/5 p-3 font-jakarta text-sm">
              <FlaskConical className="h-5 w-5 text-red" />
              <p>Basato su studi scientifici</p>
            </div>
            <div className="flex items-center gap-2 rounded-[18px] border border-[#333] bg-white/5 p-3 font-jakarta text-sm">
              <Gift className="h-5 w-5 text-red" />
              <p>Risultato gratuito</p>
            </div>
            <div className="flex items-center gap-2 rounded-[18px] border border-[#333] bg-white/5 p-3 font-jakarta text-sm">
              <FileText className="h-5 w-5 text-red" />
              <p>Strategie Premium</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
