"use client";

import { useEffect, useState } from "react";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import ProgressRing from "@/components/ProgressRing";
import { FileText } from "lucide-react";
import { QUESTIONS, AXIS_KEYS, MAX_SCORES, type Axis } from "@/data/questions";
import { PROFILES, type Profile } from "@/data/profiles";

const axisMeta: Record<
  Axis,
  { label: string; icon: string; colors: [string, string] }
> = {
  A: { label: "Autostima", icon: "🛡", colors: ["#FF3B30", "#8B0F12"] },
  B: { label: "Bisogno", icon: "❤️", colors: ["#2563EB", "#7C3AED"] },
  E: { label: "Empatia", icon: "💬", colors: ["#10B981", "#065F46"] },
  D: { label: "Dominanza", icon: "⚡", colors: ["#F59E0B", "#B45309"] },
  V: { label: "Visione", icon: "🌍", colors: ["#84CC16", "#365314"] },
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
  // Creativo Seduttore rule requires Novità pref (q14) or high q25 etc not implemented explicitly; check D>=60,E>=50
  if (D >= 60 && E >= 50)
    return PROFILES.find((p) => p.name === "Creativo Seduttore")!;
  if (V >= 70 && D < 60 && E < 65)
    return PROFILES.find((p) => p.name === "Pragmatico Realista")!;

  // fallback cosine similarity
  const vector = AXIS_KEYS.map((k) => scores[k]);
  let best = PROFILES[0];
  let bestScore = -Infinity;
  for (const p of PROFILES) {
    const v = AXIS_KEYS.map((k) => p.vector[k]);
    const dot = vector.reduce((s, val, i) => s + val * v[i], 0);
    const mag1 = Math.sqrt(vector.reduce((s, val) => s + val * val, 0));
    const mag2 = Math.sqrt(v.reduce((s, val) => s + val * val, 0));
    const cos = dot / (mag1 * mag2);
    if (cos > bestScore) {
      bestScore = cos;
      best = p;
    }
  }
  return best;
}

export default function ResultsPage() {
  const [scores, setScores] = useState<Record<Axis, number> | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("affinity.answers.v1");
    if (stored) {
      try {
        const ans: number[] = JSON.parse(stored);
        if (Array.isArray(ans) && ans.length === QUESTIONS.length) {
          const totals: Record<Axis, number> = {
            A: 0,
            B: 0,
            E: 0,
            D: 0,
            V: 0,
          };
          ans.forEach((val, idx) => {
            const q = QUESTIONS[idx];
            const opt = q.options[val - 1];
            if (opt && opt.scores) {
              for (const k of Object.keys(opt.scores) as Axis[]) {
                totals[k] += opt.scores[k] ?? 0;
              }
            }
          });
          // normalize
          const normalized = AXIS_KEYS.reduce((acc, axis) => {
            acc[axis] = (totals[axis] / MAX_SCORES[axis]) * 100;
            return acc;
          }, {} as Record<Axis, number>);
          setScores(normalized);
        }
      } catch {
        /* ignore */
      }
    }
  }, []);
  if (!scores) {
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

  const profile = chooseProfile(scores);
  const rings = AXIS_KEYS.map((k, i) => ({
    axis: k,
    value: scores[k],
    delay: i * 0.15,
    meta: axisMeta[k],
  }));

  return (
    <PageTransition>
      <section className="py-12">
        <Container className="max-w-[740px] space-y-8">
          <h1 className="text-3xl font-bold">Il tuo profilo: {profile.name}</h1>
          <p className="text-lg">{profile.desc}</p>
          <div className="flex justify-between gap-8 overflow-x-auto">
            {rings.map((r) => (
              <ProgressRing
                key={r.axis}
                value={r.value}
                label={r.meta.label}
                icon={r.meta.icon}
                colors={r.meta.colors}
                delay={r.delay}
              />
            ))}
          </div>
          <ul className="list-disc space-y-2 pl-5 text-gray-400">
            {profile.bullets.map((b) => (
              <li key={b.text}>
                <span className="mr-1">{b.icon}</span>
                {b.text}
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
