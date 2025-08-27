"use client";

import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import HeroParticles from "@/components/Particles";
import {
  FlaskConical,
  Gift,
  FileText,
  Check,
  X,
  BarChart2,
  Key,
  Zap,
  Brain,
  HelpCircle,
  Lock,
} from "lucide-react";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Quanto dura il test?",
      a: "Meno di 5 minuti.",
    },
    {
      q: "È scientifico?",
      a: "Sì: basato su oltre 50 libri e meta-analisi.",
    },
    {
      q: "Che cos’è la Guida Premium?",
      a: "Il concentrato delle strategie più potenti…",
    },
    {
      q: "Perché non basta Google?",
      a: "Online solo pezzi sparsi. Qui un percorso chiaro.",
    },
    {
      q: "Serve fare il test per acquistare la Guida?",
      a: "Il test ti orienta, la Guida accelera.",
    },
  ];

  return (
    <PageTransition>
      <section className="relative h-[calc(100vh-4rem)]">
        <HeroParticles />
        <Container className="relative z-10 flex h-full -translate-y-8 flex-col items-center justify-center text-center pb-12 lg:-translate-y-12">
          <div className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold">
            +20.000 persone hanno già fatto il test
          </div>
          <h1 className="mx-auto mt-4 max-w-[820px] text-4xl font-bold leading-[1.15] lg:mt-4">
            Scopri perché le tue relazioni non funzionano
          </h1>
          <p className="mx-auto mt-8 max-w-[820px] text-sm leading-[1.4] text-gray-400 tracking-wide lg:mt-10">
            Basato su oltre 50 studi e libri di psicologia dell’attrazione e delle relazioni.
          </p>
          <p className="mx-auto mt-4 max-w-[820px] text-sm text-gray-400 lg:mt-5">
            Scopri il tuo profilo in meno di 5 minuti. Gratis.
          </p>
          <CTAButton
            href="/test"
            className="mt-12 px-8 py-4 shadow-[0_0_12px_rgba(139,15,18,0.5)] lg:mt-14"
          >
            Inizia il test gratuito
          </CTAButton>
          <div className="mt-20 flex flex-wrap justify-center gap-3 gap-y-3 lg:mt-24 lg:gap-6 lg:gap-y-0">
            <div className="flex items-center gap-2 rounded-[18px] border border-[#333] bg-white/5 p-3 text-sm lg:p-3.5">
              <FlaskConical className="h-6 w-6 text-red" />
              <p>Basato su 50+ libri e studi scientifici</p>
            </div>
            <div className="flex items-center gap-2 rounded-[18px] border border-[#333] bg-white/5 p-3 text-sm lg:p-3.5">
              <Gift className="h-6 w-6 text-red" />
              <p>Risultato gratuito</p>
            </div>
            <div className="flex items-center gap-2 rounded-[18px] border border-[#333] bg-white/5 p-3 text-sm lg:p-3.5">
              <FileText className="h-6 w-6 text-red" />
              <p>Strategie Premium</p>
            </div>
          </div>
        </Container>
      </section>
      {/* Come funziona */}
      <section id="come-funziona" className="py-24">
        <Container className="text-center">
          <h2 className="text-3xl font-bold">Come funziona Affinity?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Un test semplice e scientifico che ti mostra chi sei davvero nelle relazioni.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4 rounded-2xl border border-[#333] bg-white/5 p-6">
              <FileText className="h-5 w-5 flex-shrink-0 opacity-80 md:h-6 md:w-6" />
              <div className="text-left">
                <h3 className="font-semibold">Rispondi al test gratuito</h3>
                <p className="mt-1 text-sm text-gray-400">30 domande, meno di 5 minuti.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-[#333] bg-white/5 p-6">
              <BarChart2 className="h-5 w-5 flex-shrink-0 opacity-80 md:h-6 md:w-6" />
              <div className="text-left">
                <h3 className="font-semibold">Ottieni il tuo profilo</h3>
                <p className="mt-1 text-sm text-gray-400">Punti di forza, aree da migliorare, grafici chiari.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-[#333] bg-white/5 p-6">
              <Key className="h-5 w-5 flex-shrink-0 opacity-80 md:h-6 md:w-6" />
              <div className="text-left">
                <h3 className="font-semibold">Sblocca la Guida Premium</h3>
                <p className="mt-1 text-sm text-gray-400">Sintesi di 50+ libri e studi.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Perché Affinity */}
      <section id="perche-affinity" className="py-24">
        <Container className="text-center">
          <h2 className="text-3xl font-bold">Perché scegliere Affinity?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Non un altro test. Una scorciatoia verso la verità delle relazioni.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#333] bg-white/5 p-6 text-left">
              <div className="flex items-center gap-2">
                <X className="h-5 w-5 text-red md:h-6 md:w-6" />
                <h3 className="font-semibold">Problemi</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>Consigli generici e contraddittori</li>
                <li>Confusione sui propri punti di forza</li>
                <li>Tempo perso tra prove ed errori</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#333] bg-white/5 p-6 text-left">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500 md:h-6 md:w-6" />
                <h3 className="font-semibold">Soluzioni</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>Indicazioni chiare basate sui dati</li>
                <li>Profilo su misura in pochi minuti</li>
                <li>Strategie pratiche da applicare subito</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      {/* Guida Premium */}
      <section id="guida-premium" className="py-24">
        <Container className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red px-3 py-1 text-sm font-semibold">
            <Lock className="h-4 w-4" />
            Guida Premium
          </div>
          <h2 className="mt-4 text-3xl font-bold">La scorciatoia che ti fa risparmiare anni.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Il concentrato dei 50+ libri e studi più influenti su attrazione e relazioni —
            tradotti in strategie semplici e applicabili.
          </p>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#333] bg-white/5 p-8 text-left">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Zap className="h-5 w-5 flex-shrink-0 opacity-80 md:h-6 md:w-6" />
                <span>Vai dritto al punto.</span>
              </li>
              <li className="flex items-start gap-4">
                <Brain className="h-5 w-5 flex-shrink-0 opacity-80 md:h-6 md:w-6" />
                <span>Ricerca vera: libri, esperimenti, meta-analisi.</span>
              </li>
              <li className="flex items-start gap-4">
                <FileText className="h-5 w-5 flex-shrink-0 opacity-80 md:h-6 md:w-6" />
                <span>Valore da consulenza (niente corsi da 1.500–2.000€).</span>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <CTAButton href="/checkout">Scopri la Guida Premium</CTAButton>
            </div>
          </div>
        </Container>
      </section>
      {/* FAQ */}
      <section id="faq" className="py-24">
        <Container className="text-center">
          <h2 className="text-3xl font-bold">Domande frequenti</h2>
          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            {faqs.map((f, i) => (
              <div key={f.q} className="rounded-2xl border border-[#333] bg-white/5">
                <button
                  className="flex w-full items-center justify-between p-4 text-left"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  <div className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 flex-shrink-0 opacity-80 md:h-6 md:w-6" />
                    <span className="font-medium">{f.q}</span>
                  </div>
                  <span className="text-gray-400">{faqOpen === i ? "-" : "+"}</span>
                </button>
                {faqOpen === i && (
                  <div className="border-t border-[#333] p-4 text-sm text-gray-400">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
