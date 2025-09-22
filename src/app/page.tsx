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
        <div className="relative z-10">
          <HeroSection />
          <MiniBenefits />
          <SectionSeparator />
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
        </div>
      </PageTransition>
      <StickyCTABar />
    </div>
  );
}