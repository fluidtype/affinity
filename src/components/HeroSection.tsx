"use client";
import CTAButton from "@/components/CTAButton";
import HeroTicker from "@/components/HeroTicker";
import { CTA_COPY } from "@/lib/constants";
import { track } from "@/lib/track";
import { motion } from "framer-motion";

const reduce =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function HeroSection() {
  return (
    // isolate -> stacking context; z-0 per lo sfondo; contenuto a z-10
    <section className="relative isolate flex min-h-[100vh] items-start overflow-hidden pt-12">

      <div className="relative z-10 w-full">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center justify-start px-4 pt-12 pb-2 text-center sm:px-6 sm:pt-14 md:pt-16">
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-jakarta text-white/90 backdrop-blur">
            +20.000 persone hanno già fatto il test
          </div>

          <div className="relative mt-8 w-full max-w-[28rem] mx-auto sm:mt-10 sm:max-w-[34rem]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.6 }}
              className="relative text-balance text-4xl font-semibold leading-tight text-white text-shadow-soft sm:text-5xl md:text-6xl"
            >
              Scopri perché le tue
              <br />
              relazioni non funzionano
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
              className="relative mt-3 text-base text-white/90 text-pretty sm:text-lg"
            >
              Un test gratuito in 5 minuti che ti apre gli occhi. E una guida basata su 500+ studi per cambiare davvero.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
              className="relative mt-4 w-full drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:w-auto"
            >
              <CTAButton
                href="/test"
                className="w-full max-w-full !flex justify-center !px-5 !py-3 text-base sm:w-auto sm:!px-6 sm:!py-3 sm:text-lg"
                onClick={() => track("cta_click_hero")}
              >
                {CTA_COPY}
              </CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
              className="relative mt-3 text-sm opacity-80"
            >
              ⭐️⭐️⭐️⭐️⭐️ 4,8/5 · 20.000+ valutazioni
            </motion.div>
          </div>

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