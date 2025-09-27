"use client";

import { motion } from "framer-motion";
import { useId } from "react";

export default function ProgressRing({
  value,
  label,
  colors,
  size = 120,
  thickness = 16,
  delay = 0,
}: {
  value: number;
  label: string;
  colors: [string, string];
  size?: number;
  thickness?: number;
  delay?: number;
}) {
  const radius = size / 2 - thickness / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);
  const id = useId().replace(/:/g, "");

  const grade =
    value >= 70 ? "Eccellente" : value >= 40 ? "Bilanciato" : "Da migliorare";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-none flex-col items-center" title={`${label} ${value}`}
    >
      <svg width={size} height={size}>
        <defs>
          <radialGradient id={id} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors[0]} />
            <stop offset="100%" stopColor={colors[1]} />
          </radialGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius - thickness / 2}
          fill="rgba(0,0,0,0.45)"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth={thickness}
          fill="transparent"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${id})`}
          strokeWidth={thickness}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          animate={{
            strokeDashoffset: [circumference, offset],
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-white font-extrabold text-3xl md:text-4xl drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]"
        >
          {Math.round(value)}%
        </text>
      </svg>
      <div className="mt-2 text-center text-xs text-white">
        <div className="font-semibold text-white">{label}</div>
        <div className="text-[10px] text-white">{grade}</div>
      </div>
    </motion.div>
  );
}
