"use client";
import { SparkleIcon } from "lucide-react";
import Image from "next/image";
import heroImages from "../../public/images/heroImages.png";
import { motion } from "framer-motion";
import Reveal from "@/src/animations/Reveal";
import AnimatedButton from "@/src/components/AnimatedButton";
import { slideInRight } from "@/src/animations/variants";

const HeroSection = () => {
  const ITEMS = Array(10).fill(null);
  return (
    <section className="space-y-30 w-full pt-34">
      <div className="px-16 py-6 overflow-hidden w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid col-span-1">
            <div className="flex flex-col items-start justify-center gap-y-4">
              <Reveal variant={slideInRight} delay={0.1}>
                <h1 className="text-[16em] font-barlow font-extrabold uppercase leading-none">
                  Reflect <span className="px-34">Fashion</span>
                </h1>
              </Reveal>
              <div className="px-36">
                <Reveal delay={0.25}>
                  <p className="font-roboto text-[16px] font-light text-justify">
                    Reflect is built around the idea of timeless streetwear —
                    clean silhouettes, premium comfort, and everyday
                    versatility. Every piece is designed to blend modern
                    aesthetics with effortless wearability, allowing you to
                    express confidence through simplicity. Inspired by
                    contemporary culture and minimal design principles, our
                    collections are created for individuals who value detail,
                    identity, and understated style in every moment.
                  </p>
                </Reveal>
              </div>
              <div className="px-36 flex items-center gap-x-4 w-full">
                <Reveal delay={0.45}>
                  <AnimatedButton className="bg-white text-black outline outline-black rounded-md px-4 py-3 w-full text-center">
                    <h1 className="font-roboto">Explore Product</h1>
                  </AnimatedButton>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="grid col-span-1">
            <Reveal variant={slideInRight} delay={0.3}>
              <div className="relative flex justify-end items-start bg-gray-100">
                <Image
                  src={heroImages}
                  width={950}
                  height={1000}
                  alt="Hero Images"
                  className="object-center"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="w-full h-28 bg-black overflow-hidden flex items-center">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...ITEMS, ...ITEMS].map((_, i) => (
            <div key={i} className="flex items-center gap-x-6 px-6">
              <h1 className="text-7xl font-barlow font-bold text-white uppercase whitespace-nowrap">
                Reflect Fashion
              </h1>
              <SparkleIcon fill="#ffffff" size={80} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
