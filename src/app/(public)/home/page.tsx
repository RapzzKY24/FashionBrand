import AnnoucementDiscount from "../../../sections/AnnoucementDiscount";
import ClothFootwerSection from "../../../sections/ClothFootwerSection";
import HeroSection from "../../../sections/HeroSection";
import OurCollection from "../../../sections/OurCollection";
import SubcsribeLetter from "../../../sections/SubcsribeLetter";
import BentoGridSection from "../../../sections/BentoGridSection";
import { ProductService } from "@/src/features/product/services/product";

export default async function Home() {
  const featuredProduct = await ProductService.getFeaturedProduct();
  return (
    <main>
      <HeroSection />
      <BentoGridSection />
      <OurCollection products={featuredProduct} />
      <ClothFootwerSection />
      <AnnoucementDiscount />
      <SubcsribeLetter />
    </main>
  );
}
