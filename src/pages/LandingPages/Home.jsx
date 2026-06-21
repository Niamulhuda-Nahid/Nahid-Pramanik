import Footer from "@/components/common/Footer";
import BridgingTheGap from "@/components/MainComponent/Home/BridgingTheGap";
import CoreServices from "@/components/MainComponent/Home/CoreServices";
import Hero from "@/components/MainComponent/Home/Hero";
import LetsBuildGreat from "@/components/MainComponent/Home/LetsBuildGreat";
import ProfessionalJourney from "@/components/MainComponent/Home/ProfessionalJourney";
import SkillsMarquee from "@/components/MainComponent/Home/SkillsMarquee";
import TechnicalMastery from "@/components/MainComponent/Home/TechnicalMastery";

const MinimalHero = () => {

  return (
    <div className="bg-[#050B14]">
      <Hero />
      <BridgingTheGap />
      <TechnicalMastery />
      <ProfessionalJourney />
      <CoreServices />
      <SkillsMarquee />
      <LetsBuildGreat />
      <Footer />
    </div>
  );
};

export default MinimalHero;
