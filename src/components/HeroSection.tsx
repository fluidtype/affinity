"use client";

import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import HeroTicker from "@/components/HeroTicker";
import { motion } from "framer-motion";

const reduce =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100vh] items-start overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          // Se hai caricato in /public: src="/images/hero.jpg"
          // Se usi Google Drive: lascia l'URL con uc?export=view&id=
          src="https://drive.google.com/uc?export=view&id=1SzyhjCD5NjNfOp0pOKMluvp0QIiyDVdi"
          alt="Coppia che cammina insieme tenendosi per mano"
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
        {/* Overlay per contrasto del testo */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="w-full">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center justify-start px-4 pt-12 pb-2 text-center sm:px-6 sm:pt-14 md:pt-16">
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-jakarta text-white/90 backdrop-blur">
            +20.000 persone hanno già fatto il test
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.6 }}
            className="mt-4 mx-auto max-w-[16ch] font-heading text-[clamp(28px,6vw,48px)] font-extrabold leading-tight tracking-[-0.5px] text-balance break-words drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl"
          >
            Scopri perché le tue
            <br />
            relazioni non funzionano
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
            className="mt-3 mx-auto max-w-[60ch] text-lg leading-relaxed text-white/80 text-pretty break-words hyphens-auto drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)]"
          >
            Un test gratuito in 5 minuti che ti apre gli occhi. E una guida basata su 500+ studi per cambiare davvero.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
            className="mt-6 w-full drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:mt-8 sm:w-auto"
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
            className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60"
          >
            <span>⭐⭐⭐⭐⭐</span>
            <span>Valutazione media 4.8/5 da 20.000 utenti</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
            className="w-full mt-6 sm:mt-6 lg:mt-8 lg:mb-6"
          >
            <HeroTicker />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
