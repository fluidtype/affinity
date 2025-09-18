"use client";

import { useEffect, useMemo, useState } from "react";
import { FileText } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import ProgressRing from "@/components/ProgressRing";
import { QUESTIONS, AXIS_KEYS, MAX_SCORES, type Axis } from "@/data/questions";
import { PROFILES, type Profile } from "@/data/profiles";

const axisMeta: Record<Axis, { label: string; colors: [string, string] }> = {
  A: { label: "Autostima", colors: ["#FF3B30", "#8B0F12"] },
  B: { label: "Bisogno", colors: ["#2563EB", "#7C3AED"] },
  E: { label: "Empatia", colors: ["#10B981", "#065F46"] },
  D: { label: "Dominanza", colors: ["#F59E0B", "#B45309"] },
  V: { label: "Visione", colors: ["#84CC16", "#365314"] },
};

function chooseProfile(scores: Record<Axis, number>): Profile {
  const { A, B, E, D, V } = scores;
  if (A >= 70 && B <= 40 && D >= 40 && D <= 75)
    return PROFILES.find((p) => p.name === "Leader Calmo")!;
  if (E >= 70 && V >= 60 && B >= 35 && B <= 70)
    return PROFILES.find((p) => p.name === "Romantico Idealista")!;
  if (D >= 70 && B >= 50)
    return PROFILES.find((p) => p.name === "Dominante Intenso")!;
  if (E >= 70 && A >= 40 && A <= 70 && D <= 40)
    return PROFILES.find((p) => p.name === "Empatico Visionario")!;
  if (A >= 70 && B <= 40 && V >= 50)
    return PROFILES.find((p) => p.name === "Indipendente Misterioso")!;
  if (D >= 60 && E >= 50)
    return PROFILES.find((p) => p.name === "Creativo Seduttore")!;
  if (V >= 70 && D < 60 && E < 65)
    return PROFILES.find((p) => p.name === "Pragmatico Realista")!;

  const vector = AXIS_KEYS.map((k) => scores[k]);
  let best = PROFILES[0];
  let bestScore = -Infinity;

  for (const profile of PROFILES) {
    const candidate = AXIS_KEYS.map((k) => profile.vector[k]);
    const dot = vector.reduce((sum, value, index) => sum + value * candidate[index], 0);
    const mag1 = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0));
    const mag2 = Math.sqrt(candidate.reduce((sum, value) => sum + value * value, 0));
    const cosine = dot / (mag1 * mag2);
    if (cosine > bestScore) {
      bestScore = cosine;
      best = profile;
    }
  }

  return best;
}

export default function ResultsPage() {
  const [scores, setScores] = useState<Record<Axis, number> | null>(null);

  useEffect(() => {
    window.getSelection()?.removeAllRanges();
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("affinity.answers.v1");
    if (!stored) {
      return;
    }

    try {
      const answers: number[] = JSON.parse(stored);
      if (!Array.isArray(answers) || answers.length !== QUESTIONS.length) {
        return;
      }

      const totals: Record<Axis, number> = { A: 0, B: 0, E: 0, D: 0, V: 0 };
      answers.forEach((value, index) => {
        const question = QUESTIONS[index];
        const option = question.options[value - 1];
        if (!option?.scores) return;
        for (const axis of Object.keys(option.scores) as Axis[]) {
          totals[axis] += option.scores[axis] ?? 0;
        }
      });

      const normalized = AXIS_KEYS.reduce((acc, axis) => {
        acc[axis] = (totals[axis] / MAX_SCORES[axis]) * 100;
        return acc;
      }, {} as Record<Axis, number>);

      setScores(normalized);
    } catch {
      /* ignore */
    }
  }, []);

  const profile = useMemo(() => (scores ? chooseProfile(scores) : null), [scores]);

  if (!scores || !profile) {
    return (
      <PageTransition>
        <section className="py-12">
          <Container>
            <p>Nessun dato trovato.</p>
          </Container>
        </section>
      </PageTransition>
    );
  }

  const rings = AXIS_KEYS.map((axis, index) => ({
    axis,
    value: scores[axis],
    delay: index * 0.15,
    meta: axisMeta[axis],
  }));

  return (
    <PageTransition>
      <section className="py-12">
        <Container className="max-w-[740px] space-y-8">
          <h1 className="text-3xl font-bold">Il tuo profilo: {profile.name}</h1>
          <p className="text-lg">{profile.desc}</p>
          <div className="flex justify-between gap-8 overflow-x-auto">
            {rings.map((ring) => (
              <ProgressRing
                key={ring.axis}
                value={ring.value}
                label={ring.meta.label}
                colors={ring.meta.colors}
                delay={ring.delay}
              />
            ))}
          </div>
          <ul className="list-disc space-y-2 pl-5 text-gray-400">
            {profile.bullets.map((bullet) => (
              <li key={bullet.text}>
                <span className="mr-1">{bullet.icon}</span>
                {bullet.text}
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <CTAButton
              href="/checkout"
              className="flex w-full items-center gap-2 px-6 py-3 sm:w-auto"
            >
              <FileText className="h-5 w-5" />
              Scarica il report completo (PDF)
            </CTAButton>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
