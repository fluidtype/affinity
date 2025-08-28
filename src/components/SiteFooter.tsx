import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative bg-[#0a0a0a] text-sm text-gray-500">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D2D] to-transparent blur-sm" />
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 px-4 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Link href="/privacy" className="hover:text-gray-300">
            Privacy
          </Link>
          <Link href="/termini" className="hover:text-gray-300">
            Termini
          </Link>
          <a
            href="https://instagram.com/getaffinity"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            Instagram @getaffinity
          </a>
        </div>
        <p className="text-center text-gray-600">
          Affinity — basato su oltre 500 libri, studi e meta-analisi sulle relazioni.
        </p>
      </div>
    </footer>
  );
}
