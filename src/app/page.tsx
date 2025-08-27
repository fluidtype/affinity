import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProsConsSection from "@/components/ProsConsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import StickyCTABar from "@/components/StickyCTABar";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <HowItWorks />
      <ProsConsSection />
      <FAQSection />
      <FinalCTA />
      <StickyCTABar />
    </PageTransition>
  );
}
