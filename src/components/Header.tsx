import Link from "next/link";
import CTAButton from "./CTAButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/80 backdrop-blur">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="text-2xl font-bold">Affinity</Link>
        <nav className="ml-auto flex items-center gap-6 text-sm">
          <Link href="/#come-funziona" className="hover:text-red">
            Come funziona
          </Link>
          <Link href="/privacy" className="hover:text-red">
            Privacy
          </Link>
          <CTAButton href="/test">Inizia</CTAButton>
        </nav>
      </div>
    </header>
  );
}
