"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CTAButton from "./CTAButton";
import { CTA_COPY } from "@/lib/constants";
import { useScrollProgress } from "@/lib/useScrollProgress";

export default function Header() {
  const { scrolled } = useScrollProgress();

  const pathname = usePathname();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "backdrop-blur bg-bg/70 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      {!scrolled && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      )}

      <div className="relative z-10 flex h-12 items-center px-4">
        {pathname === "/checkout" ? (
          <a
            href="/"
            className="text-2xl font-manrope font-extrabold tracking-[-0.5px]"
          >
            Affinity
          </a>
        ) : (
          <Link
            href="/"
            className="text-2xl font-manrope font-extrabold tracking-[-0.5px]"
          >
            Affinity
          </Link>
        )}
        <nav className="ml-auto flex items-center gap-3" aria-label="Navigazione principale">
          <div className="hidden items-center gap-4 text-xs font-body sm:flex sm:text-sm">
            <Link
              href="/#come-funziona"
              className="hover:text-red whitespace-nowrap"
            >
              Come funziona
            </Link>
            <Link href="/privacy" className="hover:text-red">
              Privacy
            </Link>
          </div>
          <div className="ml-2 hidden sm:block sm:ml-4">
            <CTAButton
              href="/test"
              className="max-w-full !px-4 !py-2 text-xs sm:text-sm"
            >
              {CTA_COPY}
            </CTAButton>
          </div>
        </nav>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red/60 to-transparent" />
    </header>
  );
}
