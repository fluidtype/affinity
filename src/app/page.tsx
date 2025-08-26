import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import { FlaskConical, Gift, FileText } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <section className="flex flex-col items-center justify-center py-24 text-center">
        <Container className="space-y-8">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold">
            Il test che rivela il tuo profilo nelle relazioni
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Affinity è il tuo coach digitale per attrazione e relazioni. Scopri il tuo profilo e ricevi consigli pratici basati su studi scientifici.
          </p>
          <CTAButton href="/test">Inizia il test</CTAButton>
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
