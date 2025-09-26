import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative text-xs text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red/40 to-transparent blur-sm" />
      <div className="mx-auto max-w-container px-4 py-6 md:flex md:items-center md:gap-6">
        <div className="order-1 flex flex-col items-center gap-2 md:order-1 md:flex-row md:items-center md:gap-6">
          <Link
            href="/privacy"
            className="px-2 py-2 text-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-red"
          >
            Privacy
          </Link>
          <Link
            href="/termini"
            className="px-2 py-2 text-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-red"
          >
            Termini
          </Link>
        </div>
        <div className="order-2 mt-4 flex justify-center md:order-3 md:mt-0 md:ml-auto md:justify-end">
          <a
            href="https://www.instagram.com/affinity.it?igsh=MXJ3bDJuM3pxdjNlbQ=="
            target="_blank"
            rel="noreferrer"
            className="px-2 py-2 text-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-red"
          >
            Instagram @getaffinity
          </a>
        </div>
        <p className="order-3 mt-4 text-center text-white md:order-2 md:mt-0 md:flex-1">
          Affinity — basato su oltre 500 libri, studi e meta-analisi sulle relazioni.
        </p>
      </div>
    </footer>
  );
}
