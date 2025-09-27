"use client";

import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import { CTA_COPY } from "@/lib/constants";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const sectionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  } as const;
  return (
    <motion.section className="py-10 sm:py-14 text-center text-white" {...sectionProps}>
      <Container>
        <h2 className="font-heading font-bold tracking-[-0.5px] text-3xl text-white">Pronto a iniziare?</h2>
        <CTAButton href="/test" className="mt-8 px-8 py-4">
          {CTA_COPY}
        </CTAButton>
      </Container>
    </motion.section>
  );
}
