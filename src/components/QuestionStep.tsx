"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const options = ["Per niente", "Poco", "Abbastanza", "Molto", "Moltissimo"];

export type Question = {
  category: string;
  text: string;
  icon: string;
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
      <div className="text-sm text-gray-400">{question.category}</div>
      <h2 className="flex items-center gap-2 text-2xl font-bold">
        <span className="text-2xl opacity-80">{question.icon}</span>
        {question.text}
      </h2>
      <div className="flex flex-col gap-3">
        {options.map((opt, i) => (
          <motion.button
            key={opt}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(i + 1)}
            className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-left text-sm transition-colors ${
              answer === i + 1
                ? "border-red bg-red text-fg"
                : "border-border bg-transparent"
            }`}
          >
            <span>{opt}</span>
            {answer === i + 1 && <Check className="h-4 w-4" />}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
