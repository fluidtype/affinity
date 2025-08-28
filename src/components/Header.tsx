import Link from "next/link";
import CTAButton from "./CTAButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-bg/80 backdrop-blur relative">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="text-2xl font-heading font-bold tracking-[-0.5px]">Affinity</Link>
        <nav className="ml-auto flex items-center gap-6 text-sm font-jakarta">
          <Link href="/#come-funziona" className="hover:text-red">
            Come funziona
          </Link>
          <Link href="/privacy" className="hover:text-red">
            Privacy
          </Link>
          <CTAButton href="/test">Inizia</CTAButton>
        </nav>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red/60 to-transparent" />
    </header>
  );
}
