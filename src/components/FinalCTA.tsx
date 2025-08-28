"use client";

import CTAButton from "@/components/CTAButton";
import Container from "@/components/Container";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const sectionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  } as const;
  return (
    <motion.section
      className="relative py-20 text-center before:absolute before:inset-x-0 before:-top-px before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#FF2D2D] before:to-transparent before:blur-sm before:content-['']"
      {...sectionProps}
    >
      <Container>
        <h2 className="font-heading font-extrabold tracking-[-0.5px] text-3xl">Pronto a iniziare?</h2>
        <CTAButton href="/test" className="mt-8 px-8 py-4">
          Inizia il test gratuito
        </CTAButton>
      </Container>
    </motion.section>
  );
}
