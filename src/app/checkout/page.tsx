"use client";

import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import Skeleton from "@/components/Skeleton";

export default function CheckoutPage() {
  const [loaded, setLoaded] = useState(false);
  return (
    <PageTransition>
      <section className="py-12">
        <Container className="max-w-[740px]">
          {!loaded && <Skeleton className="h-96 w-full" />}
          <iframe
            src="https://gumroad.com/l/placeholder?embedded=1"
            className="h-96 w-full"
            onLoad={() => setLoaded(true)}
          />
        </Container>
      </section>
    </PageTransition>
  );
}
