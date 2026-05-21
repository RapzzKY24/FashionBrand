"use client";
import { useState } from "react";
import Reveal from "@/src/animations/Reveal";
import { ProductGrid, ProductGridItem } from "@/src/animations/ProductGrid";
import { CategoryButton } from "../components/CategoryButton";
import { ProductCard } from "../components/ProductCard";
import Link from "next/link";
import { Props } from "../features/product/components/RelatedProducts";

const categories = [
  "Hoodie",
  "Caps & Bags",
  "Trending",
  "Out Wear",
  "Accessories",
];

const OurCollection = ({ products }: Props) => {
  const [activeCategory, setActiveCategory] = useState("Hoodie");
  return (
    <section className="flex flex-col space-y-12 px-16 py-6 overflow-hidden w-full pt-20">
      <Reveal>
        <div className="flex justify-between items-center">
          <h1 className="text-[6em] font-barlow font-extrabold uppercase">
            Our Collection
          </h1>
          <p className="font-light font-roboto text-[16px] max-w-xl text-end">
            Step into the world of Reflect, where each collection tells its own
            story. From minimalist essentials to bold statement pieces, our
            curated collections are designed to suit every occasion and style.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-wrap">
            {categories.map((category) => (
              <CategoryButton
                key={category}
                title={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>

          <Link
            href="/collections"
            className="group relative overflow-hidden border border-black px-5 py-3 text-sm font-roboto uppercase tracking-[0.08em]"
          >
            <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-300 ease-out group-hover:translate-x-0" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              View Collections
            </span>
          </Link>
        </div>
      </Reveal>
      <ProductGrid className="grid grid-cols-4 gap-6">
        {products?.map((item) => (
          <ProductGridItem key={item.id}>
            <ProductCard
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              stock_status={item.stock_status}
            />
          </ProductGridItem>
        ))}
      </ProductGrid>
    </section>
  );
};

export default OurCollection;
