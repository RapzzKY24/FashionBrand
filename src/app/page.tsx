import AboutUs from "../sections/AboutUs";
import AnnoucementDiscount from "../sections/AnnoucementDiscount";
import ClothFootwerSection from "../sections/ClothFootwerSection";
import HeroSection from "../sections/HeroSection";
import OurCollection from "../sections/OurCollection";
import SubcsribeLetter from "../sections/SubcsribeLetter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <OurCollection />
      <ClothFootwerSection />
      <AnnoucementDiscount />
      <SubcsribeLetter />
    </main>
  );
}
