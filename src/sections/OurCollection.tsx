"use client";
import { useState } from "react";
import { CategoryButton } from "../components/CategoryButton";
import Hoddie1 from "../../public/hoddieCollection/hoddie1.png";
import Hoddie2 from "../../public/hoddieCollection/hoddie2.png";
import Hoddie3 from "../../public/hoddieCollection/hoddie3.png";
import Hoddie4 from "../../public/hoddieCollection/hoddie4.png";
import { ProductCard } from "../components/ProductCard";
import Link from "next/link";

const categories = [
  "Hoodie",
  "Caps & Bags",
  "Trending",
  "Out Wear",
  "Accessories",
];

export const products = [
  {
    id: 1,
    image: Hoddie1,
    title: "Men BLVCK Grey Hoodie",
    category: "Hoddie",
    price: "$180",
  },
  {
    id: 2,
    image: Hoddie2,
    title: "LHR London England Hoodie",
    category: "Hoddie",
    price: "$250",
  },
  {
    id: 3,
    image: Hoddie3,
    title: "Retro Rapper Tupac Hoodie",
    category: "Hoddie",
    price: "$100",
  },
  {
    id: 4,
    image: Hoddie4,
    title: "Hip Hop Street Wear Hoodie",
    category: "Hoddie",
    price: "$120",
  },
];

const OurCollection = () => {
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
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default OurCollection;
