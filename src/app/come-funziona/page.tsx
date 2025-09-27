import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import { ListChecks, Brain, Target } from "lucide-react";

export default function ComeFunzionaPage() {
  return (
    <PageTransition>
      <section className="py-12 text-white">
        <Container className="max-w-[740px] space-y-12">
          <h1 className="text-center text-3xl font-bold">Come funziona</h1>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <ListChecks className="h-6 w-6 text-red" />
              <div>
                <h2 className="font-semibold text-white">Test strutturato</h2>
                <p className="text-sm text-white">
                  Ogni domanda è pensata per rivelare aspetti chiave del tuo modo di vivere le relazioni.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Brain className="h-6 w-6 text-red" />
              <div>
                <h2 className="font-semibold text-white">Modello di profilo</h2>
                <p className="text-sm text-white">
                  Analizziamo le tue risposte e calcoliamo un profilo sintetico basato su studi scientifici.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Target className="h-6 w-6 text-red" />
              <div>
                <h2 className="font-semibold text-white">Consigli pratici</h2>
                <p className="text-sm text-white">
                  Ricevi suggerimenti immediati per migliorare le tue interazioni quotidiane.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}