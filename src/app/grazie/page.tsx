"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import { track } from "@/lib/track";

function GrazieInner() {
  const sp = useSearchParams();

  useEffect(() => {
    const paid = sp.get("paid");
    const amountStr = sp.get("amount");
    const currency = sp.get("currency") || "EUR";
    const value = amountStr ? Number(amountStr) : 0;

    if (paid === "1") {
      track("purchase", { value, currency });
    }
  }, [sp]);

  return (
    <section className="flex items-center justify-center py-24 text-center">
      <Container className="space-y-4">
        <h1 className="text-3xl font-bold">Grazie! Il tuo PDF è pronto</h1>
        <p className="text-muted">
          Riceverai il link da Gumroad. Controlla anche lo spam
        </p>
        <CTAButton href="/">Torna alla Home</CTAButton>
      </Container>
    </section>
  );
}

export default function GraziePage() {
  return (
    <PageTransition>
      <Suspense fallback={null}>
        <GrazieInner />
      </Suspense>
    </PageTransition>
  );
}

export const dynamic = "force-dynamic";
