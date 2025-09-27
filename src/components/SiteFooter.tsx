import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative text-xs text-white pb-[calc(env(safe-area-inset-bottom)+16px)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red/40 to-transparent blur-sm" />
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 px-4 py-8 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
          <Link
            href="/privacy"
            className="px-3 py-2 text-white transition hover:text-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            Privacy
          </Link>
          <Link
            href="/termini"
            className="px-3 py-2 text-white transition hover:text-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            Termini
          </Link>
          <a
            href="https://www.instagram.com/affinity.it?igsh=MXJ3bDJuM3pxdjNlbQ=="
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 text-white transition hover:text-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            Instagram
          </a>
        </nav>
        <p className="max-w-2xl text-sm leading-[1.65] text-white/70">
          Affinity — basato su oltre 500 libri, studi e meta-analisi sulle relazioni.
        </p>
      </div>
    </footer>
  );
}
