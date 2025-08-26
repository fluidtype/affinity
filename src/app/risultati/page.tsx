"use client";

import { useEffect, useState } from "react";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import ResultChart from "@/components/ResultChart";
import CTAButton from "@/components/CTAButton";

const labels = ["Umore", "Socialità", "Sicurezza", "Messaggi", "Iniziativa"];

function getProfile(score: number) {
  if (score < 40) return "Esploratore Riflessivo";
  if (score < 60) return "Equilibrista Pragmatico";
  if (score < 80) return "Leader Calmo";
  return "Catalizzatore Sicuro";
}

export default function ResultsPage() {
  const [scores, setScores] = useState<number[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("affinity.answers.v1");
    if (stored) {
      try {
        const ans: number[] = JSON.parse(stored);
        if (Array.isArray(ans) && ans.length > 0) {
          const groups = labels.map((_, i) => {
            const group = ans.filter((_, idx) => idx % labels.length === i);
            return group.reduce((a, b) => a + b, 0) / group.length;
          });
          setScores(groups);
          const avg = ans.reduce((a, b) => a + b, 0) / ans.length;
          setTotal(avg * 20);
        }
      } catch {
        /* ignore */
      }
    }
  }, []);

  if (!scores.length) {
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

  const profile = getProfile(total);
  const data = labels.map((l, i) => ({ name: l, value: scores[i] * 20 }));

  return (
    <PageTransition>
      <section className="py-12">
        <Container className="max-w-[740px] space-y-8">
          <h1 className="text-3xl font-bold">Il tuo profilo: {profile}</h1>
          <p className="text-lg">Livello di Attrazione: {Math.round(total)}/100</p>
          <ResultChart data={data} />
          <ul className="list-disc space-y-2 pl-5 text-gray-400">
            <li>Ricorda di essere autentico in ogni interazione.</li>
            <li>Ascolta attivamente chi ti sta vicino.</li>
            <li>Prenota momenti per riflettere su di te.</li>
          </ul>
          <div className="pt-4">
            <CTAButton href="/checkout" className="w-full sm:w-auto">Scarica il report completo (PDF)</CTAButton>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
