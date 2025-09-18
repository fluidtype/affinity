"use client";

import { useEffect, useRef, useState } from "react";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import Skeleton from "@/components/Skeleton";
import { waitGumroadReady } from "@/lib/gumroad";

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

  return (
    <PageTransition>
      <section className="py-12">
        <Container className="max-w-[740px]">
          {!loaded && <Skeleton className="h-[720px] w-full" />}
          {showLink && !loaded && (
            <p className="mb-4 text-center text-sm">
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
          <iframe
            key={src}
            ref={iframeRef}
            src={src}
            className="h-[720px] w-full"
            title="Gumroad Checkout"
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        </Container>
      </section>
    </PageTransition>
  );
}