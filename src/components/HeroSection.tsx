"use client";

import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import HeroTicker from "@/components/HeroTicker";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex h-[calc(100vh-4rem)] items-center">
      <Container className="flex flex-col items-center justify-center px-6 sm:px-8 text-center -translate-y-12 md:-translate-y-16">
        <div className="flex flex-col items-center">
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-jakarta text-white/90 backdrop-blur">
            +20.000 persone hanno già fatto il test
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-4 max-w-[24ch] md:max-w-[36ch] font-heading font-extrabold tracking-[-0.5px] text-[clamp(2rem,5vw,3.5rem)] leading-tight hyphens-auto break-words text-balance"
          >
            Scopri perché le tue relazioni non funzionano
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-7 max-w-[60ch] text-muted text-balance"
          >
            Un test gratuito in 5 minuti che ti apre gli occhi. E una guida basata su 500+ studi per cambiare davvero.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <CTAButton href="/test" className="px-10 py-5 text-lg">
              Inizia il test gratuito
            </CTAButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full"
          >
            <HeroTicker />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
