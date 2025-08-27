import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import { FlaskConical, Gift, FileText } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <section className="h-full">
        <Container className="flex h-full flex-col items-center justify-center text-center">
          <div className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold">
            +20.000 persone hanno già fatto il test
          </div>
          <h1 className="mx-auto mt-3 max-w-[820px] text-4xl font-bold leading-[1.15] lg:mt-4">
            Scopri perché le tue relazioni non funzionano
          </h1>
          <p className="mx-auto mt-5 max-w-[820px] text-sm leading-[1.4] text-gray-400 tracking-wide lg:mt-7">
            Basato su oltre 50 studi e libri di psicologia dell’attrazione e delle relazioni.
          </p>
          <p className="mx-auto mt-2 max-w-[820px] text-sm text-gray-400 lg:mt-3">
            Scopri il tuo profilo in meno di 5 minuti. Gratis.
          </p>
          <CTAButton
            href="/test"
            className="mt-7 px-8 py-4 shadow-[0_0_12px_rgba(139,15,18,0.5)] lg:mt-9"
          >
            Inizia il test gratuito
          </CTAButton>
          <div className="mt-8 mb-12 flex flex-wrap justify-center gap-3 gap-y-3 lg:mt-10 lg:gap-6 lg:gap-y-0">
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
    </PageTransition>
  );
}
