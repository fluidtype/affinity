"use client";
import CTAButton from "@/components/CTAButton";
import HeroTicker from "@/components/HeroTicker";
import { CTA_COPY } from "@/lib/constants";
import { track } from "@/lib/track";
import { motion } from "framer-motion";
import Image from "next/image";

const reduce =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function HeroSection() {
  return (
    // isolate -> stacking context; z-0 per lo sfondo; contenuto a z-10
    <section className="relative isolate flex min-h-[100vh] items-start overflow-hidden pt-12">

      <div className="relative z-10 w-full">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-start gap-12 px-4 pt-12 pb-2 sm:px-6 sm:pt-14 md:pt-16 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex w-full max-w-[32rem] flex-col items-start text-left sm:max-w-[36rem]">
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-body text-white/90 backdrop-blur">
              +20.000 persone hanno già fatto il test
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.6 }}
              className="mt-6 max-w-[32rem] text-balance text-left text-4xl font-bold tracking-tight leading-tight text-white text-shadow-soft sm:max-w-[36rem] sm:text-5xl md:text-6xl"
            >
              Scopri perché le tue relazioni non funzionano
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-[32rem] text-left text-base text-white/90 text-pretty text-balance sm:max-w-[36rem] sm:text-lg"
            >
              Un test gratuito in 5 minuti che ti apre gli occhi. E una guida basata su 500+ studi per cambiare davvero.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
              className="relative mt-6 w-full drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:w-auto sm:self-start"
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
              className="mt-6 text-left text-sm text-white/80"
            >
              ⭐️⭐️⭐️⭐️⭐️ 4,8/5 · 20.000+ valutazioni
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
            className="flex w-full justify-center lg:flex-1 lg:justify-end"
          >
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:max-w-md lg:max-w-lg">
              <Image
                src="/hero.jpg"
                alt="Coppia che si sostiene a vicenda durante il test sulle relazioni"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 32rem, (min-width: 640px) 24rem, 100vw"
                priority
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
          className="mt-12 w-full sm:mt-14 lg:mt-16 lg:mb-6"
        >
          <HeroTicker />
        </motion.div>
      </div>
    </section>
  );
}