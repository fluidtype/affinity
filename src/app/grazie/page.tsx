import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";

export default function GraziePage() {
  return (
    <PageTransition>
      <section className="flex items-center justify-center py-24 text-center">
        <Container className="space-y-4">
          <h1 className="text-3xl font-bold">Grazie! Il tuo PDF è pronto</h1>
          <p className="text-muted">
            Riceverai il link da Gumroad. Controlla anche lo spam
          </p>
          <CTAButton href="/">Torna alla Home</CTAButton>
        </Container>
      </section>
    </PageTransition>
  );
}