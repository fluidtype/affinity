import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import { FlaskConical, Gift, FileText } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <section className="flex flex-col items-center justify-center py-24 text-center">
        <Container className="space-y-8">
          <div className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold">
            +20.000 persone hanno già fatto il test
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold">
            Scopri perché le tue relazioni non funzionano
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Basato su oltre 50 studi e libri di psicologia dell’attrazione e delle relazioni.
          </p>
          <p className="mx-auto max-w-2xl text-sm text-gray-400">
            Scopri il tuo profilo in meno di 5 minuti. Gratis.
          </p>
          <CTAButton href="/test" className="px-8 py-4">
            Inizia il test gratuito
          </CTAButton>
          <div className="grid gap-6 pt-16 sm:grid-cols-3">
            <div className="flex flex-col items-center space-y-2">
              <FlaskConical className="h-8 w-8 text-red" />
              <p>Evidence-based</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Gift className="h-8 w-8 text-red" />
              <p>Risultato gratuito</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FileText className="h-8 w-8 text-red" />
              <p>Report premium</p>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
