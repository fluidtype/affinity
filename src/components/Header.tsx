import Link from "next/link";
import Container from "./Container";
import CTAButton from "./CTAButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Affinity
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/come-funziona" className="hover:text-red">
            Come funziona
          </Link>
          <Link href="/privacy" className="hover:text-red">
            Privacy
          </Link>
          <CTAButton href="/test">Inizia</CTAButton>
        </nav>
      </Container>
    </header>
  );
}
