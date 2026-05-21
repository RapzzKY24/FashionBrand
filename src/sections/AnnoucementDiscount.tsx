"use client";
import Image from "next/image";
import Reveal from "@/src/animations/Reveal";
import AnimatedButton from "@/src/components/AnimatedButton";
import { slideInLeft, slideInRight } from "@/src/animations/variants";
import Product3 from "../../public/hoddieCollection/product3.png";

const AnnoucementDiscount = () => {
  return (
    <section className="px-16 py-20 overflow-hidden w-full">
      <div className="grid grid-cols-2 items-center gap-16">
        <Reveal variant={slideInLeft}>
          <div className="w-full">
            <div className="relative bg-gray-200 w-full h-[600px] rounded-xl overflow-hidden p-6">
              <Image src={Product3} fill alt="product" className="object-cover" />
            </div>
          </div>
        </Reveal>
        <Reveal variant={slideInRight} delay={0.15}>
          <div className="flex flex-col justify-center gap-y-8">
            <div className="space-y-4 max-w-2xl">
              <h1 className="font-extrabold font-barlow text-[7rem] uppercase leading-[0.9]">
                30% Off On All New Arrival
              </h1>

              <p className="font-bold font-roboto text-[16px]">
                Offer Last Date 30 September
              </p>
            </div>
            <AnimatedButton className="bg-black text-white px-6 py-4 rounded-sm w-fit">
              <h1 className="font-roboto font-bold">Explore Now</h1>
            </AnimatedButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AnnoucementDiscount;
