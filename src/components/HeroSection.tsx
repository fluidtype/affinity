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
    <section className="relative isolate flex w-[min(100dvw,100%)] min-h-[min(100svh,70rem)] items-start overflow-hidden 2xl:min-h-[min(100svh,64rem)]">

      <div className="relative z-10 w-full">
        <div className="mx-0 flex w-full max-w-none flex-col items-start gap-12 px-4 pt-[clamp(3rem,8vh,5.5rem)] pb-2 sm:mx-auto sm:max-w-[min(96rem,92vw)] sm:px-6 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          <div className="flex w-full max-w-[32rem] flex-col items-start text-left sm:max-w-[36rem]">
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-body text-white/90 backdrop-blur">
              +20.000 persone hanno già fatto il test
            </div>

            <div className="mt-6 flex w-fit max-w-[32rem] flex-col items-start sm:max-w-[36rem] xl:max-w-[42rem]">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.6 }}
                className="w-full text-left text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl"
              >
                <span className="block w-full whitespace-nowrap">Scopri perché le tue</span>
                <span className="block w-full whitespace-nowrap">relazioni non</span>
                <span className="block w-full whitespace-nowrap">funzionano</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
                className="mt-4 w-full text-left text-base text-white text-pretty text-balance sm:text-lg xl:text-xl 2xl:text-2xl"
              >
                Un test gratuito in 5 minuti che ti apre gli occhi. E una guida basata su 500+ studi per cambiare davvero.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
              className="relative mt-6 w-full sm:w-auto sm:self-start"
            >
              <CTAButton
                href="/test"
                className="w-full max-w-full !flex justify-center !px-5 !py-3 text-base sm:w-auto sm:!px-6 sm:!py-3 sm:text-lg xl:!px-7 xl:!py-3.5 xl:text-xl"
                onClick={() => track("cta_click_hero")}
              >
                {CTA_COPY}
              </CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
              className="mt-6 text-left text-sm text-white/80 xl:text-base 2xl:text-lg"
            >
              ⭐️⭐️⭐️⭐️⭐️ 4,8/5 · 20.000+ valutazioni
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
          className="mt-[clamp(3rem,8vh,5rem)] w-full lg:mb-[clamp(1rem,3vh,2.5rem)] 2xl:mb-[clamp(0.5rem,2vh,1.5rem)]"
        >
          <HeroTicker />
        </motion.div>
      </div>
    </section>
  );
}