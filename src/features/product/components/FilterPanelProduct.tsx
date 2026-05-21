"use client";
import { MinusIcon, SlidersHorizontalIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/src/animations/variants";

const categories = [
  { name: "All", count: 24, active: true },
  { name: "Hoodie", count: 10 },
  { name: "T-Shirt", count: 20 },
  { name: "Outerwear", count: 50 },
  { name: "Shoes", count: 15 },
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
  { name: "New Arrival", count: 24, active: true },
  { name: "Essential", count: 10 },
  { name: "Limited Edition", count: 20 },
];

const FilterPanelProduct = () => {
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
            {categories.map((item) => (
              <button
                key={item.name}
                className="w-full flex items-center justify-between group"
              >
                <span
                  className={`text-sm font-roboto transition ${
                    item.active
                      ? "font-bold text-black"
                      : "font-light text-black/80 group-hover:text-black"
                  }`}
                >
                  {item.name}
                </span>
                <span className="text-sm font-light font-roboto text-gray-400">
                  ({item.count})
                </span>
              </button>
            ))}
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
                <span
                  className={`text-sm font-roboto transition ${
                    item.active
                      ? "font-bold text-black"
                      : "font-light text-black/80 group-hover:text-black"
                  }`}
                >
                  {item.name}
                </span>
                <span className="text-sm font-light font-roboto text-gray-400">
                  ({item.count})
                </span>
              </button>
            ))}
          </div>
        </FilterSection>
      </motion.div>

      <motion.div variants={staggerItem}>
        <div className="flex justify-between items-center">
          <button className="font-light font-roboto text-gray-400 uppercase hover:text-black transition">
            Reset All
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
