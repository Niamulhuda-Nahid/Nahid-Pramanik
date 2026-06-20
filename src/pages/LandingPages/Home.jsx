import BridgingTheGap from "@/components/MainComponent/Home/BridgingTheGap";
import CoreServices from "@/components/MainComponent/Home/CoreServices";
import Hero from "@/components/MainComponent/Home/Hero";
import ProfessionalJourney from "@/components/MainComponent/Home/ProfessionalJourney";
import TechnicalMastery from "@/components/MainComponent/Home/TechnicalMastery";

const MinimalHero = () => {

  return (
    <div className="bg-[#050B14]">
      <Hero />
      <BridgingTheGap />
      <TechnicalMastery />
      <ProfessionalJourney />
      <CoreServices />
    </div>
  );
};

export default MinimalHero;
