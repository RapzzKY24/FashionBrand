import { SparkleIcon } from "lucide-react";
import Image from "next/image";
import heroImages from "../../public/images/heroImages.png";

const HeroSection = () => {
  const ITEMS = Array(10).fill(null);
  return (
    <section className="space-y-20 w-full pt-20">
      <div className="px-16 py-6 overflow-hidden w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid col-span-1">
            <div className="flex flex-col items-start justify-center gap-y-4">
              <h1 className="text-[16em] font-barlow font-extrabold uppercase leading-none">
                Reflect <span className="px-34">Fashion</span>
              </h1>
              <div className="px-36">
                <p className="font-roboto text-[16px] font-light text-justify">
                  Reflect is built around the idea of timeless streetwear —
                  clean silhouettes, premium comfort, and everyday versatility.
                  Every piece is designed to blend modern aesthetics with
                  effortless wearability, allowing you to express confidence
                  through simplicity. Inspired by contemporary culture and
                  minimal design principles, our collections are created for
                  individuals who value detail, identity, and understated style
                  in every moment.
                </p>
              </div>
              <div className="px-36 flex items-center gap-x-4 w-full">
                <button className="bg-black px-4 py-3 rounded-md w-[25%]">
                  <h1 className="text-center text-white font-roboto">
                    Buy Product
                  </h1>
                </button>
                <button className="bg-white outline outline-black rounded-md px-4 py-3 w-[25%]">
                  <h1 className="text-center text-black font-roboto">
                    Explore Product
                  </h1>
                </button>
              </div>
            </div>
          </div>
          <div className="grid col-span-1">
            <div className="relative flex justify-end items-start bg-gray-100">
              <Image
                src={heroImages}
                width={950}
                height={1000}
                alt="Hero Images"
                className="object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-28 bg-black overflow-hidden flex items-center">
        <div className="animate-marquee">
          {[...ITEMS, ...ITEMS].map((_, i) => (
            <div key={i} className="flex items-center gap-x-6 px-6">
              <h1 className="text-7xl font-barlow font-bold text-white uppercase whitespace-nowrap">
                Reflect Fashion
              </h1>
              <SparkleIcon fill="#ffffff" size={80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
