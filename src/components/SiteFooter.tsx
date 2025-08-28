import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative bg-[#050506] text-xs text-gray-400">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red/60 to-transparent blur" />
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 px-4 py-8">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
          <Link href="/privacy" className="hover:text-gray-200">
            Privacy
          </Link>
          <Link href="/termini" className="hover:text-gray-200">
            Termini
          </Link>
          <a
            href="https://instagram.com/getaffinity"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200"
          >
            Instagram @getaffinity
          </a>
        </div>
        <p className="text-center text-gray-500">
          Affinity — basato su oltre 500 libri, studi e meta-analisi sulle relazioni.
        </p>
      </div>
    </footer>
  );
}
