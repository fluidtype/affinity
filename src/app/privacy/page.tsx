import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";

export default function PrivacyPage() {
  return (
    <PageTransition>
      <section className="py-12 text-white">
        <Container className="max-w-[740px] space-y-4">
          <h1 className="text-3xl font-bold text-white">Privacy</h1>
          <p className="text-white">
            Dati anonimi, LocalStorage only, nessun tracking personale.
          </p>
        </Container>
      </section>
    </PageTransition>
  );
}