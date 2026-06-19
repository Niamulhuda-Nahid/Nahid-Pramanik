import BridgingTheGap from "@/components/MainComponent/Home/BridgingTheGap";
import Hero from "@/components/MainComponent/Home/Hero";
import TechnicalMastery from "@/components/MainComponent/Home/TechnicalMastery";

const MinimalHero = () => {

  return (
    <div className="bg-[#050B14]">
      <Hero />
      <BridgingTheGap />
      <TechnicalMastery />
    </div>
  );
};

export default MinimalHero;
