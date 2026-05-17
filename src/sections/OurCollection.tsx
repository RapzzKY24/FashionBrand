"use client";
import { useState } from "react";
import { CategoryButton } from "../components/CategoryButton";
import { ProductCard } from "../components/ProductCard";
import Link from "next/link";
import { Props } from "../pages/shop/components/RelatedProducts";

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
      <div className="flex justify-between items-center">
        <h1 className="text-[6em] font-barlow font-extrabold uppercase">
          Our Collection
        </h1>
        <p className="font-light font-roboto text-[16px] max-w-xl  text-end">
          Step into the world of Reflect, where each collection tells its own
          story. From minimalist essentials to bold statement pieces, our
          curated collections are designed to suit every occasion and style.
        </p>
      </div>
      <div className="flex items-center justify-between">
        {/* categories */}
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

        {/* collections button */}
        <Link
          href="/collections"
          className="border border-black px-5 py-3 text-sm font-roboto uppercase tracking-[0.08em] hover:bg-black hover:text-white transition"
        >
          View Collections
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {products?.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default OurCollection;
