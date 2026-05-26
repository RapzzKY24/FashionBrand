"use client";
import { MinusIcon, SlidersHorizontalIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/src/animations/variants";
import { useSearch } from "@/src/features/search/hooks/use-search";

const categories = [
  { name: "All", slug: null },
  { name: "Hoodie", slug: "hoodie" },
  { name: "T-Shirt", slug: "t-shirt" },
  { name: "Outerwear", slug: "outerwear" },
  { name: "Shoes", slug: "shoes" },
];

const sizes = ["S", "M", "L", "XL", "XXL"];

export const colors = [
  "bg-lime-900",
  "bg-indigo-950",
  "bg-gray-300",
  "bg-slate-950",
  "bg-red-600",
];

const collections = [
  { name: "New Arrival", slug: "new-arrival" },
  { name: "Essential", slug: "essential" },
  { name: "Limited Edition", slug: "limited-edition" },
];

// const sortOptions = [
//   { name: "Newest", value: "newest" },
//   { name: "Oldest", value: "oldest" },
//   { name: "Price: Low to High", value: "price_asc" },
//   { name: "Price: High to Low", value: "price_desc" },
// ];

const FilterPanelProduct = () => {
  const { category, setCategory, resetFilters } = useSearch();

  return (
    <motion.aside
      className="w-full space-y-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
    >
      <motion.div variants={staggerItem}>
        <div className="border-y border-gray-300 py-4 flex justify-between items-center">
          <h1 className="font-roboto uppercase text-black text-[12px] tracking-[0.14em]">
            Filters
          </h1>
          <SlidersHorizontalIcon size={18} className="cursor-pointer" />
        </div>
      </motion.div>

      <motion.div variants={staggerItem}>
        <FilterSection title="Category">
          <div className="space-y-3">
            {categories.map((item) => {
              const isActive =
                item.slug === category || (!item.slug && !category);
              return (
                <button
                  key={item.name}
                  onClick={() => setCategory(item.slug)}
                  className="w-full flex items-center justify-between group"
                >
                  <span
                    className={`text-sm font-roboto transition ${
                      isActive
                        ? "font-bold text-black"
                        : "font-light text-black/80 group-hover:text-black"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </FilterSection>
      </motion.div>
      <motion.div variants={staggerItem}>
        <FilterSection title="Size">
          <div className="flex items-center gap-3 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                className="min-w-14 px-5 py-3 bg-gray-100 text-black font-roboto font-medium text-sm hover:bg-black hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>
        </FilterSection>
      </motion.div>

      <motion.div variants={staggerItem}>
        <FilterSection title="Color">
          <div className="flex items-center gap-x-5">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full ${color} ring-1 ring-black/5 hover:ring-2 hover:ring-black transition`}
              />
            ))}
          </div>
        </FilterSection>
      </motion.div>

      <motion.div variants={staggerItem}>
        <FilterSection title="Price">
          <div className="space-y-3">
            <div className="relative h-5 flex items-center">
              <div className="absolute w-full h-[2px] bg-gray-300" />
              <div className="absolute left-[18%] right-[25%] h-[2px] bg-black" />
              <button className="absolute left-[18%] w-3 h-3 rounded-full bg-white border border-black -translate-x-1/2 hover:scale-110 transition" />
              <button className="absolute right-[25%] w-3 h-3 rounded-full bg-white border border-black translate-x-1/2 hover:scale-110 transition" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-400 uppercase font-roboto font-light text-sm">
                $50
              </p>
              <p className="text-gray-400 uppercase font-roboto font-light text-sm">
                $300
              </p>
            </div>
          </div>
        </FilterSection>
      </motion.div>

      <motion.div variants={staggerItem}>
        <FilterSection title="Collection">
          <div className="space-y-3">
            {collections.map((item) => (
              <button
                key={item.name}
                className="w-full flex items-center justify-between group"
              >
                <span className="text-sm font-light font-roboto text-black/80 group-hover:text-black transition">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </FilterSection>
      </motion.div>

      <motion.div variants={staggerItem}>
        <div className="flex justify-between items-center">
          <button
            onClick={resetFilters}
            className="font-light font-roboto text-gray-400 uppercase hover:text-black transition"
          >
            Reset Filters
          </button>
          <XIcon
            size={18}
            className="cursor-pointer hover:rotate-90 transition"
          />
        </div>
      </motion.div>
    </motion.aside>
  );
};

export const FilterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="border-b border-gray-300 pb-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-roboto uppercase text-black text-[12px] tracking-[0.14em]">
          {title}
        </h2>
        <MinusIcon size={18} />
      </div>
      {children}
    </section>
  );
};

export default FilterPanelProduct;
