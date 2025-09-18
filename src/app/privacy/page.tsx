import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";

export default function PrivacyPage() {
  return (
    <PageTransition>
      <section className="py-12">
        <Container className="max-w-[740px] space-y-4">
          <h1 className="text-3xl font-bold">Privacy</h1>
          <p className="text-muted">
            Dati anonimi, LocalStorage only, nessun tracking personale.
          </p>
        </Container>
      </section>
    </PageTransition>
  );
}