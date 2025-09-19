"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import { track } from "@/lib/track";

export default function GraziePage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("paid") === "1") {
      const amount = Number(searchParams.get("amount") || 0);
      track("purchase", { value: amount, currency: "EUR" });
    }
  }, [searchParams]);

  return (
    <PageTransition>
      <section className="flex items-center justify-center py-24 text-center">
        <Container className="space-y-4">
          <h1 className="text-3xl font-bold">Grazie! Il tuo PDF è pronto</h1>
          <p className="text-muted">
            Riceverai il link da Gumroad. Controlla anche lo spam
          </p>
          <CTAButton href="/">Torna alla Home</CTAButton>
        </Container>
      </section>
    </PageTransition>
  );
}