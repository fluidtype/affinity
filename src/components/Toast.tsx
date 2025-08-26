"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export default function Toast({
  show,
  children,
}: {
  show: boolean;
  children: ReactNode;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-md bg-border/80 px-4 py-2 text-sm backdrop-blur"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
