"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

 codex/setup-next.js-14-project-with-typescript-vnkk5u
export type Question = {
  category: string;
  text: string;
  icon: string;
  options: { label: string }[];

const options = ["Per niente", "Poco", "Abbastanza", "Molto", "Moltissimo"];

export type Question = {
  category: string;
  text: string;
 main
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
 codex/setup-next.js-14-project-with-typescript-vnkk5u
      <h2 className="flex items-center gap-2 text-2xl font-bold">
        <span className="text-2xl opacity-80">{question.icon}</span>
        {question.text}
      </h2>
      <div className="flex flex-col gap-3">
        {question.options.map((opt, i) => (
          <motion.button
            key={opt.label}

      <h2 className="text-2xl font-bold">{question.text}</h2>
      <div className="flex flex-col gap-3">
        {options.map((opt, i) => (
          <motion.button
            key={opt}
 main
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(i + 1)}
            className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-left text-sm transition-colors ${
              answer === i + 1
                ? "border-red bg-red text-fg"
                : "border-border bg-transparent"
            }`}
          >
 codex/setup-next.js-14-project-with-typescript-vnkk5u
            <span>{opt.label}</span>

            <span>{opt}</span>
 main
            {answer === i + 1 && <Check className="h-4 w-4" />}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
