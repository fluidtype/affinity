import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProsConsSection from "@/components/ProsConsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import StickyCTABar from "@/components/StickyCTABar";
import SectionSeparator from "@/components/SectionSeparator";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <SectionSeparator />
      <HowItWorks />
      <SectionSeparator />
      <ProsConsSection />
      <SectionSeparator />
      <FAQSection />
      <SectionSeparator />
      <FinalCTA />
      <StickyCTABar />
    </PageTransition>
  );
}
