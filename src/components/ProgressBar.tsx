"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = (current / total) * 100;
  return (
    <div className="w-full">
      <div className="h-2 w-full rounded-full bg-red/30">
        <motion.div
          className="h-2 rounded-full bg-fg"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", duration: 0.35 }}
        />
      </div>
    </div>
  );
}
