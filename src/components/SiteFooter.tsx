import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative bg-bg text-xs text-gray-400">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red/40 to-transparent blur-sm" />
      <div className="mx-auto max-w-container px-4 py-6 md:grid md:grid-cols-3 md:items-center md:gap-4">
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-start md:gap-6">
          <Link href="/privacy" className="px-2 py-2 text-gray-500 hover:text-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red">
            Privacy
          </Link>
          <Link href="/termini" className="px-2 py-2 text-gray-500 hover:text-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red">
            Termini
          </Link>
        </div>
        <p className="mt-4 text-center text-gray-400 md:mt-0">
          Affinity — basato su oltre 500 libri, studi e meta-analisi sulle relazioni.
        </p>
        <div className="mt-4 flex justify-center md:mt-0 md:justify-end">
          <a
            href="https://instagram.com/getaffinity"
            target="_blank"
            rel="noreferrer"
            className="px-2 py-2 text-gray-500 hover:text-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red"
          >
            Instagram @getaffinity
          </a>
        </div>
      </div>
    </footer>
  );
}
