import BridgingTheGap from "@/components/MainComponent/Home/BridgingTheGap";
import CoreServices from "@/components/MainComponent/Home/CoreServices";
import Hero from "@/components/MainComponent/Home/Hero";
import LetsBuildGreat from "@/components/MainComponent/Home/LetsBuildGreat";
import ProfessionalJourney from "@/components/MainComponent/Home/ProfessionalJourney";
import SelectedWork from "@/components/MainComponent/Home/SelectedWork";
import SkillsMarquee from "@/components/MainComponent/Home/SkillsMarquee";
import TechnicalMastery from "@/components/MainComponent/Home/TechnicalMastery";

const MinimalHero = () => {

  return (
    <div>
      <Hero />
      <BridgingTheGap />
      <TechnicalMastery />
      <SelectedWork />
      <ProfessionalJourney />
      <CoreServices />
      <SkillsMarquee />
      <LetsBuildGreat />
    </div>
  );
};

export default MinimalHero;
