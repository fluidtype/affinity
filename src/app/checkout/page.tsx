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
        <Container className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          {!loaded && (
            <Skeleton className="w-full min-h-[28rem] sm:min-h-[36rem] lg:min-h-[60vh]" />
          )}
          <iframe
            src="https://gumroad.com/l/placeholder?embedded=1"
            className="w-full min-h-[28rem] sm:min-h-[36rem] lg:min-h-[60vh]"
            onLoad={() => setLoaded(true)}
          />
        </Container>
      </section>
    </PageTransition>
  );
}
