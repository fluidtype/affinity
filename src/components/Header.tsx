"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import CTAButton from "./CTAButton";
import { CTA_COPY } from "@/lib/constants";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { useIsMobileSafari } from "@/lib/useIsMobileSafari";

export default function Header() {
  const { scrolled } = useScrollProgress();
  const isMobileSafari = useIsMobileSafari();

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!navRef.current) {
        return;
      }

      if (!navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      firstMenuItemRef.current?.focus();
    } else if (wasMenuOpenRef.current) {
      menuButtonRef.current?.focus();
    }

    wasMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? isMobileSafari
            ? "bg-bg/95 shadow-[0_8px_24px_rgba(0,0,0,0.32)]"
            : "supports-[backdrop-filter]:backdrop-blur bg-bg/70 shadow-lg shadow-black/30"
          : isMobileSafari
            ? "bg-gradient-to-b from-black/90 via-black/80 to-transparent"
            : "bg-transparent"
      }`}
    >
      {!scrolled && !isMobileSafari && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      )}

      <div className="relative z-10 flex h-12 items-center px-4">
        {pathname === "/checkout" ? (
          <a
            href="/"
            className="text-2xl font-manrope font-bold tracking-[-0.5px]"
          >
            Affinity
          </a>
        ) : (
          <Link
            href="/"
            className="text-2xl font-manrope font-bold tracking-[-0.5px]"
          >
            Affinity
          </Link>
        )}
        <nav
          ref={navRef}
          className="ml-auto flex items-center gap-3"
          aria-label="Navigazione principale"
        >
          <div className="relative sm:hidden">
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M5 17H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <div
                id="mobile-menu"
                role="menu"
                className={`absolute right-0 top-full mt-3 w-56 rounded-2xl border p-1 text-white shadow-[0_18px_40px_rgba(0,0,0,0.45)] sm:hidden ${
                  isMobileSafari
                    ? "border-white/15 bg-[#101012]/95"
                    : "border-white/20 bg-white/10 supports-[backdrop-filter]:backdrop-blur"
                }`}
              >
                <div className="flex flex-col">
                  <Link
                    ref={firstMenuItemRef}
                    href="/test"
                    role="menuitem"
                    className="rounded-xl px-4 py-3 text-base font-medium transition hover:bg-white/10 focus-visible:bg-white/10"
                  >
                    Inizia il test gratuito
                  </Link>
                  <Link
                    href="/privacy"
                    role="menuitem"
                    className="rounded-xl px-4 py-3 text-base font-medium transition hover:bg-white/10 focus-visible:bg-white/10"
                  >
                    Privacy
                  </Link>
                  <Link
                    href="/come-funziona"
                    role="menuitem"
                    className="rounded-xl px-4 py-3 text-base font-medium transition hover:bg-white/10 focus-visible:bg-white/10"
                  >
                    Come funziona
                  </Link>
                </div>
              </div>
            )}
          </div>
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
