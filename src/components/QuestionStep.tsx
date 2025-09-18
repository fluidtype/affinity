"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { Question } from "@/data/questions";

export default function QuestionStep({
  question,
  answer,
  onSelect,
}: {
  question: Question;
  answer?: number;
  onSelect: (val: number) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-400">{question.category}</div>
      <h2 className="flex items-center gap-2 text-2xl font-bold">
        <span className="text-2xl opacity-80">{question.icon}</span>
        {question.text}
      </h2>
      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <motion.button
            key={option.label}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(index + 1)}
            className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-left text-sm transition-colors ${
              answer === index + 1
                ? "border-red bg-red text-fg"
                : "border-border bg-transparent"
            }`}
          >
            <span>{option.label}</span>
            {answer === index + 1 && <Check className="h-4 w-4" />}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
