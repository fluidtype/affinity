"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export type Question = {
  category: string;
  text: string;
  icon: string;
  options: { label: string }[];
};

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
      <div className="text-sm text-muted lg:text-base">{question.category}</div>
      <h2 className="flex items-start gap-2 text-2xl font-bold lg:text-3xl">
        <span className="shrink-0 text-2xl opacity-80 lg:text-3xl">{question.icon}</span>
        <span className="break-words">{question.text}</span>
      </h2>
      <div className="flex flex-col gap-3 lg:gap-4">
        {question.options.map((opt, i) => (
          <motion.button
            key={opt.label}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(i + 1)}
            className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-left text-sm transition-colors lg:px-6 lg:py-4 lg:text-base ${
              answer === i + 1
                ? "border-red bg-red text-fg"
                : "border-border bg-transparent"
            }`}
          >
            <span>{opt.label}</span>
            {answer === i + 1 && <Check className="h-4 w-4" />}
          </motion.button>
        ))}
      </div>
    </div>
  );
}