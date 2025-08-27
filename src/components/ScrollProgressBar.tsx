"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 top-16 z-20 h-1 w-full origin-left bg-red"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
