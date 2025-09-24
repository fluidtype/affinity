import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import MiniBenefits from "@/components/MiniBenefits";
import HowItWorks from "@/components/HowItWorks";
import ProsConsSection from "@/components/ProsConsSection";
import AgainstGurus from "@/components/AgainstGurus";
import Manifesto from "@/components/Manifesto";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import StickyCTABar from "@/components/StickyCTABar";
import SectionSeparator from "@/components/SectionSeparator";

export default function Home() {
  return (
    <div className="relative isolate">
      <PageTransition>
        <main className="relative z-10 space-y-12 md:space-y-16">
          <HeroSection />
          <MiniBenefits />
          <section id="after-badges" className="mt-2 md:mt-4">
            <SectionSeparator className="my-3 sm:my-5" />
            <HowItWorks />
            <SectionSeparator />
            <ProsConsSection />
            <SectionSeparator />
            <AgainstGurus />
            <SectionSeparator />
            <Manifesto />
            <SectionSeparator />
            <FAQSection />
            <SectionSeparator />
            <FinalCTA />
          </section>
        </main>
      </PageTransition>
      <StickyCTABar />
    </div>
  );
}