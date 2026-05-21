"use client";
import Image from "next/image";
import Reveal from "@/src/animations/Reveal";
import AnimatedButton from "@/src/components/AnimatedButton";
import { slideInLeft, slideInRight } from "@/src/animations/variants";
import Product1 from "../../public/hoddieCollection/product.png";
import Product2 from "../../public/hoddieCollection/product2.png";

const ClothFootwerSection = () => {
  return (
    <div className="space-y-20">
      <section className="flex flex-col px-16 pt-20">
        <Reveal>
          <div className="flex justify-between items-start">
            <p className="font-light font-roboto text-[16px] max-w-lg pt-28 leading-7">
              At Reflect, we offer more than just clothing and footwear — we
              provide a canvas for your individuality. Our thoughtfully designed
              apparel and footwear collections blend style and comfort, allowing
              you to make a statement with every step
            </p>

            <h1 className="text-[8rem] font-barlow font-extrabold uppercase text-end leading-[0.9] max-w-6xl">
              Cloth And Footwear Collection
            </h1>
          </div>
        </Reveal>
      </section>

      <section className="bg-black px-16 py-32 space-y-40 overflow-hidden">
        <div className="grid grid-cols-2 items-center gap-24">
          <Reveal variant={slideInLeft}>
            <div className="flex justify-start">
              <div className="bg-white w-[420px] h-[620px] rounded-2xl overflow-hidden relative">
                <Image
                  src={Product1}
                  fill
                  alt="product"
                  className="absolute object-center"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant={slideInRight} delay={0.15}>
            <div className="space-y-8">
              <h1 className="text-[5.5rem] font-extrabold font-barlow text-white uppercase leading-[0.9] max-w-md">
                Clothing Collection
              </h1>

              <p className="font-roboto font-light text-[16px] text-gray-300 leading-7 max-w-xl">
                Our clothing collection at Reflect is a celebration of style,
                versatility, and craftsmanship. Each piece is meticulously
                designed to complement a range of occasions, from everyday
                casual wear to statement-making outfits for special events
              </p>

              <AnimatedButton variant="white" className="border border-white text-white px-6 py-4 rounded-sm">
                Explore Products
              </AnimatedButton>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 items-center gap-24">
          <Reveal variant={slideInLeft} delay={0.15}>
            <div className="space-y-8 flex flex-col items-end text-end">
              <h1 className="text-[5.5rem] font-extrabold font-barlow text-white uppercase leading-[0.9] max-w-md">
                Shoes Collection
              </h1>

              <p className="font-roboto font-light text-[16px] text-gray-300 leading-7 max-w-xl">
                The shoe collection at Reflect is where style meets comfort,
                crafted for those who value both elegance and ease. From sleek
                heels that elevate your evening look to casual sneakers designed
                for all-day wear, our range of footwear is created to complement
                your lifestyle
              </p>

              <AnimatedButton variant="white" className="border border-white text-white px-6 py-4 rounded-sm">
                Explore Shoes
              </AnimatedButton>
            </div>
          </Reveal>

          <Reveal variant={slideInRight}>
            <div className="flex justify-end">
              <div className="bg-white w-[420px] h-[620px] rounded-2xl overflow-hidden relative">
                <Image
                  src={Product2}
                  fill
                  alt="product"
                  className="absolute object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ClothFootwerSection;
