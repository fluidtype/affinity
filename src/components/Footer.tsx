import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 text-white">
      <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
        <div className="flex gap-4">
          <Link
            href="https://instagram.com/getaffinity"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-red"
          >
            Instagram
          </Link>
        </div>
        <Link href="/termini" className="transition hover:text-red">
          Termini e condizioni
        </Link>
      </Container>
    </footer>
  );
}
