import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-black text-sm text-gray-500">
      <div className="mx-auto flex max-w-container flex-col items-center justify-center gap-4 px-4 py-8 sm:flex-row">
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
    </footer>
  );
}
