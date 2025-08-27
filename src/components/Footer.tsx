import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-sm text-gray-500">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <Link
          href="https://instagram.com/getaffinity"
          target="_blank"
          className="hover:text-red"
          rel="noreferrer"
        >
          Instagram @getaffinity
        </Link>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-red">
            Privacy
          </Link>
          <Link href="/termini" className="hover:text-red">
            Termini
          </Link>
        </div>
      </div>
    </footer>
  );
}
