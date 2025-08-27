"use client";

import { motion } from "framer-motion";
import { useId } from "react";

export default function ProgressRing({
  value,
  label,
  size = 120,
  thickness = 12,
  delay = 0,
}: {
  value: number;
  label: string;
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
            <stop offset="0%" stopColor="#FF3B30" />
            <stop offset="50%" stopColor="#FF8A3C" />
            <stop offset="100%" stopColor="#8B0F12" />
          </radialGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#333"
          strokeWidth={thickness}
          fill="transparent"
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
          animate={{
            strokeDashoffset: [
              circumference,
              offset * 0.97,
              offset,
            ],
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay, times: [0, 0.9, 1] }}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius - thickness / 2 + 0.5}
          stroke="white"
          strokeWidth={1}
          fill="transparent"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-white text-2xl font-extrabold sm:text-3xl"
        >
          {Math.round(value)}
        </text>
      </svg>
      <div className="mt-2 text-center text-xs">
        <div>{label}</div>
        <div className="text-[10px] text-gray-400">{grade}</div>
      </div>
    </motion.div>
  );
}
