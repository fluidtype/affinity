"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import Skeleton from "@/components/Skeleton";
import { waitGumroadReady } from "@/lib/gumroad";
import CheckoutParticles from "@/components/CheckoutParticles";

export default function CheckoutPage() {
  const [product, setProduct] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("product");
    setProduct(p ? decodeURIComponent(p) : null);
  }, []);

  useEffect(() => {
    waitGumroadReady().catch(() => {});
    const id = setTimeout(() => setShowLink(true), 3000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const frame = iframeRef.current;
    return () => {
      if (frame) {
        frame.src = "about:blank";
      }
    };
  }, []);

  if (product === null) {
    return null; // wait until product is parsed
  }

  if (!product) {
    return (
      <PageTransition>
        <section className="py-12">
          <Container className="max-w-[740px]">
            <p>Nessun prodotto selezionato.</p>
          </Container>
        </section>
      </PageTransition>
    );
  }

  const src = product.includes("embedded=1")
    ? product
    : `${product}${product.includes("?") ? "&" : "?"}embedded=1`;

  const frameStyle: CSSProperties = { height: "clamp(420px, 80vh, 900px)" };

  return (
    <PageTransition>
      <section className="py-12 sm:py-14">
        <Container className="!max-w-none !px-0 sm:!px-6">
          <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-4 sm:gap-8 sm:px-6">
            {showLink && !loaded && (
              <p className="text-center text-sm text-muted">
                Se non vedi il checkout, {" "}
                <a
                  href={product}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  apri qui
                </a>
                .
              </p>
            )}
            <div
              className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-[0_35px_120px_rgba(0,0,0,0.45)]"
              style={frameStyle}
            >
              <CheckoutParticles />
              {!loaded && (
                <div className="absolute inset-0 z-10">
                  <Skeleton className="h-full w-full rounded-none" />
                </div>
              )}
              <iframe
                key={src}
                ref={iframeRef}
                src={src}
                title="Gumroad Checkout"
                loading="lazy"
                className="relative z-10 h-full w-full"
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}