import Link from "next/link";
 codex/setup-next.js-14-project-with-typescript-vnkk5u

import Container from "./Container";
 main
import CTAButton from "./CTAButton";

export default function Header() {
  return (
 codex/setup-next.js-14-project-with-typescript-vnkk5u
    <header className="sticky top-0 z-20 border-b border-border bg-bg/80 backdrop-blur">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="text-2xl font-bold">Affinity</Link>
        <nav className="ml-auto flex items-center gap-6 text-sm">

    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">Affinity</Link>
        <nav className="flex items-center gap-6 text-sm">
 main
          <Link href="/come-funziona" className="hover:text-red">
            Come funziona
          </Link>
          <Link href="/privacy" className="hover:text-red">
            Privacy
          </Link>
          <CTAButton href="/test">Inizia</CTAButton>
        </nav>
 codex/setup-next.js-14-project-with-typescript-vnkk5u
      </div>

      </Container>
 main
    </header>
  );
}
