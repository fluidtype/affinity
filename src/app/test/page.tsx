"use client";

import { useEffect, useRef, useState } from "react";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import Card from "@/components/Card";
import QuestionStep from "@/components/QuestionStep";
import ProgressBar from "@/components/ProgressBar";
import CTAButton from "@/components/CTAButton";
import { useRouter } from "next/navigation";
import { Info } from "lucide-react";
import { QUESTIONS } from "@/data/questions";

const BLURBS = [
  {
    index: 4,
    text: "Questi ruoli derivano da studi pubblicati sul Journal of Personality and Social Psychology.",
  },
  {
    index: 14,
    text: "Le domande si basano su oltre 50 studi di psicologia delle relazioni.",
  },
  {
    index: 24,
    text: "Altri studenti hanno confermato questi pattern in esperimenti di laboratorio.",
  },
];

export default function TestPage() {
  const total = QUESTIONS.length;
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  const [answers, setAnswers] = useState<number[]>(Array(total).fill(0));
  const answersRef = useRef<number[]>(Array(total).fill(0));
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("affinity.answers.v1");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length === total) {
          setAnswers(parsed);
          answersRef.current = parsed;
          setShowResume(true);
        }
      } catch {
        /* ignore */
      }
    }
  }, [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      const num = Number(e.key);
      const opts = QUESTIONS[currentRef.current].options.length;
      if (num >= 1 && num <= opts) select(num);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  const select = (val: number) => {
    const newAns = [...answersRef.current];
    newAns[currentRef.current] = val;
    answersRef.current = newAns;
    setAnswers(newAns);
    localStorage.setItem("affinity.answers.v1", JSON.stringify(newAns));
  };

  const next = () => {
    const curr = currentRef.current;
    if (!answersRef.current[curr]) return;
    if (curr < total - 1) {
      const newCurr = curr + 1;
      currentRef.current = newCurr;
      setCurrent(newCurr);
    } else router.push("/risultati");
  };

  const prev = () => {
    const curr = currentRef.current;
    if (curr > 0) {
      const newCurr = curr - 1;
      currentRef.current = newCurr;
      setCurrent(newCurr);
    }
  };

  const resume = () => {
    const firstUnanswered = answersRef.current.findIndex((a) => a === 0);
    const newCurr = firstUnanswered === -1 ? 0 : firstUnanswered;
    currentRef.current = newCurr;
    setCurrent(newCurr);
    setShowResume(false);
  };

  const restart = () => {
    const empty = Array(total).fill(0);
    answersRef.current = empty;
    setAnswers(empty);
    localStorage.setItem("affinity.answers.v1", JSON.stringify(empty));
    currentRef.current = 0;
    setCurrent(0);
    setShowResume(false);
  };

  return (
    <PageTransition>
      <section className="py-12">
        <Container className="flex flex-col items-center">
          {showResume && (
            <div className="mb-4 flex w-full max-w-[740px] items-center justify-between rounded-md border border-border bg-bg p-4 text-sm">
              <span>Vuoi riprendere?</span>
              <div className="flex gap-2">
                <button onClick={restart} className="underline">
                  Ricomincia
                </button>
                <button onClick={resume} className="text-red underline">
                  Riprendi
                </button>
              </div>
            </div>
          )}
          <Card className="w-full max-w-[740px] space-y-8">
            <div className="sticky top-0 z-10 pb-4">
              <ProgressBar current={current + 1} total={total} />
              <p className="mt-2 text-sm" aria-live="polite">
                Domanda {current + 1} di {total}
              </p>
            </div>
            <QuestionStep
              question={QUESTIONS[current]}
              answer={answers[current]}
              onSelect={select}
            />
            {(() => {
              const blurb = BLURBS.find((b) => b.index === current);
              if (!blurb) return null;
              return (
                <div className="flex items-start gap-2 rounded-md border border-border p-3 text-sm text-gray-300">
                  <Info className="mt-0.5 h-4 w-4 text-muted" />
                  <p>{blurb.text}</p>
                </div>
              );
            })()}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={prev}
                className="text-sm text-muted disabled:opacity-50"
                disabled={current === 0}
              >
                Indietro
              </button>
              <div className="flex items-center gap-4">
                <button onClick={next} className="text-sm text-muted">
                  Salta
                </button>
                <CTAButton onClick={next} disabled={!answers[current]}>
                  Avanti
                </CTAButton>
              </div>
            </div>
            <div className="pt-4">
              <ProgressBar current={current + 1} total={total} />
            </div>
          </Card>
        </Container>
      </section>
    </PageTransition>
  );
}
