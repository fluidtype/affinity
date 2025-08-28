"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[80vw] max-h-[800px] w-[80vw] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red opacity-30 blur-[120px] md:h-[60vw] md:w-[60vw]"
        animate={
          reduce
            ? undefined
            : { x: ["-5%", "5%"], y: ["-5%", "5%"], scale: [0.95, 1.05] }
        }
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-[90vw] max-h-[900px] w-[90vw] max-w-[900px] translate-x-1/3 translate-y-1/3 rounded-full bg-red-dim opacity-20 blur-[160px]"
        animate={
          reduce
            ? undefined
            : { x: ["5%", "-5%"], y: ["5%", "-5%"], scale: [1, 1.1] }
        }
        transition={{ duration: 40, repeat: Infinity, repeatType: "mirror" }}
      />
    </div>
  );
}
