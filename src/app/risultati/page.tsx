"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import ProgressRing from "@/components/ProgressRing";
import Card from "@/components/Card";
import { FileText } from "lucide-react";
import EventPing from "@/components/EventPing";
import { track } from "@/lib/track";
import { QUESTIONS, AXIS_KEYS, MAX_SCORES, type Axis } from "@/data/questions";
import { PROFILES, type Profile } from "@/data/profiles";

const axisMeta: Record<Axis, { label: string; colors: [string, string] }> = {
  A: { label: "Autostima", colors: ["#FF3B30", "#8B0F12"] },
  B: { label: "Bisogno", colors: ["#2563EB", "#7C3AED"] },
  E: { label: "Empatia", colors: ["#10B981", "#065F46"] },
  D: { label: "Dominanza", colors: ["#F59E0B", "#B45309"] },
  V: { label: "Visione", colors: ["#84CC16", "#365314"] },
};

const PAYHIP_CHECKOUT_URL = "https://payhip.com/b/CswVq";

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
    window.getSelection()?.removeAllRanges();
  }, []);

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

  const handleCheckout = () => {
    track("checkout_open");
    window.location.href = PAYHIP_CHECKOUT_URL;
  };

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  return (
    <PageTransition>
      <EventPing name="result_view" params={{ profile: profile.name }} />
      <section className="py-20 text-white">
        <Container className="mx-auto flex max-w-[880px] flex-col items-center space-y-16 text-center">
          <motion.div {...fadeIn(0)} className="w-full">
            <Card className="mx-auto max-w-3xl space-y-10 border-white/10 bg-white/5 px-8 py-10 text-center text-white">
              <motion.h1
                {...fadeIn(0.05)}
                className="font-manrope text-4xl font-bold leading-tight text-white sm:text-5xl"
              >
                Il tuo profilo: {profile.name}
              </motion.h1>
              <motion.p
                {...fadeIn(0.12)}
                className="mx-auto max-w-2xl text-lg leading-[1.65] text-white/80 sm:text-xl"
              >
                {profile.desc}
              </motion.p>
              <motion.div
                {...fadeIn(0.18)}
                className="mx-auto grid gap-4 text-left text-base leading-[1.65] sm:grid-cols-3 sm:text-[1rem]"
              >
                {profile.bullets.map((b) => (
                  <div
                    key={b.text}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                  >
                    <span className="mt-1 text-2xl text-white">{b.icon}</span>
                    <p className="text-sm font-medium leading-[1.65] text-white/90 sm:text-base">
                      {b.text}
                    </p>
                  </div>
                ))}
              </motion.div>
            </Card>
          </motion.div>
          <motion.div
            {...fadeIn(0.25)}
            className="flex w-full flex-wrap justify-center gap-10"
          >
            {rings.map((r) => (
              <ProgressRing
                key={r.axis}
                value={r.value}
                label={r.meta.label}
                colors={r.meta.colors}
                delay={r.delay + 0.3}
                size={140}
                thickness={18}
              />
            ))}
          </motion.div>
          <motion.div
            {...fadeIn(0.35)}
            className="flex w-full flex-col items-center gap-4"
          >
            <CTAButton
              onClick={handleCheckout}
              className="flex w-full items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-semibold tracking-tight shadow-[0_18px_45px_rgba(255,55,55,0.35)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red sm:w-auto"
            >
              <FileText className="h-6 w-6" />
              Scarica il report completo (PDF)
            </CTAButton>
            <p className="max-w-xl text-sm leading-[1.65] text-white/70">
              Checkout sicuro su Payhip • PDF disponibile subito dopo l’acquisto
            </p>
          </motion.div>
        </Container>
      </section>
    </PageTransition>
  );
}