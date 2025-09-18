"use client";

import CTAButton from "@/components/CTAButton";
import HeroTicker from "@/components/HeroTicker";
import { motion } from "framer-motion";

const reduce =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-start">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center justify-start px-4 pt-8 pb-4 text-center sm:px-6 sm:pt-10 md:pt-14">
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-jakarta text-white/90 backdrop-blur">
          +20.000 persone hanno già fatto il test
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.6 }}
          className="mt-4 font-heading text-[clamp(28px,6vw,48px)] font-extrabold leading-tight tracking-[-0.5px] text-balance break-words sm:text-5xl md:text-6xl"
        >
          Scopri perché le tue
          <br />
          relazioni non funzionano
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
          className="mt-3 text-[clamp(15px,3.8vw,18px)] leading-relaxed text-muted text-pretty break-words hyphens-auto"
        >
          Un test gratuito in 5 minuti che ti apre gli occhi. E una guida basata su 500+ studi per cambiare davvero.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
          className="mt-6 w-full sm:mt-8 sm:w-auto"
        >
          <CTAButton
            href="/test"
            className="w-full max-w-full !flex justify-center !px-5 !py-3 text-base sm:w-auto sm:!px-6 sm:!py-3 sm:text-lg"
          >
            Inizia il test gratuito
          </CTAButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
          className="w-full mt-6 sm:mt-8"
        >
          <HeroTicker />
        </motion.div>
      </div>
    </section>
  );
}
