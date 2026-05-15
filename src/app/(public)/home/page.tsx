import AnnoucementDiscount from "../../../sections/AnnoucementDiscount";
import ClothFootwerSection from "../../../sections/ClothFootwerSection";
import HeroSection from "../../../sections/HeroSection";
import OurCollection from "../../../sections/OurCollection";
import SubcsribeLetter from "../../../sections/SubcsribeLetter";
import BentoGridSection from "../../../sections/BentoGridSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BentoGridSection />
      <OurCollection />
      <ClothFootwerSection />
      <AnnoucementDiscount />
      <SubcsribeLetter />
    </main>
  );
}
