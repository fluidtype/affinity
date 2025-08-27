import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import { FlaskConical, Gift, FileText } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <section className="h-full">
        <Container className="flex h-full flex-col items-center justify-center gap-3 text-center">
          <div className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold">
            +20.000 persone hanno già fatto il test
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold">
            Scopri perché le tue relazioni non funzionano
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-gray-400 tracking-wide">
            Basato su oltre 50 studi e libri di psicologia dell’attrazione e delle relazioni.
          </p>
          <p className="mx-auto max-w-2xl text-sm text-gray-400">
            Scopri il tuo profilo in meno di 5 minuti. Gratis.
          </p>
          <CTAButton
            href="/test"
            className="mt-10 px-8 py-4 shadow-[0_0_12px_rgba(139,15,18,0.5)]"
          >
            Inizia il test gratuito
          </CTAButton>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-[#333] bg-white/5 px-5 py-3">
              <FlaskConical className="h-6 w-6 text-red" />
              <p className="text-sm">Basato su 50+ libri e studi scientifici</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#333] bg-white/5 px-5 py-3">
              <Gift className="h-6 w-6 text-red" />
              <p className="text-sm">Risultato gratuito</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#333] bg-white/5 px-5 py-3">
              <FileText className="h-6 w-6 text-red" />
              <p className="text-sm">Strategie Premium</p>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
