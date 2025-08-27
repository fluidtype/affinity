"use client";

import { motion } from "framer-motion";

export default function ProgressRing({
  value,
  label,
  size = 120,
  thickness = 8,
  color = "#E50914",
  delay = 0,
}: {
  value: number;
  label: string;
  size?: number;
  thickness?: number;
  color?: string;
  delay?: number;
}) {
  const radius = size / 2 - thickness / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  const grade =
    value >= 70 ? "Eccellente" : value >= 40 ? "Bilanciato" : "Da migliorare";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center" title={`${label} ${value}`}
    >
      <svg width={size} height={size} className="drop-shadow-[0_0_4px_rgba(229,9,20,0.4)]">
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
          stroke={color}
          strokeWidth={thickness}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.8, ease: "easeOut", delay }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-white text-xl font-extrabold"
        >
          {Math.round(value)}
        </text>
      </svg>
      <div className="mt-2 text-center text-sm">
        <div>{label}</div>
        <div className="text-xs text-gray-400">{grade}</div>
      </div>
    </motion.div>
  );
}
