"use client";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/src/animations/variants";
import ProductCardBento, {
  ProductCardBentoHorizontal,
} from "./ProductCardBento";

export const productBentoData = [
  {
    id: 1,
    images: "/productCollection/womenCollection.png",
    category: "Women Collection",
    heading: "Stylish Winter T-Shirt For Women",
  },
  {
    id: 2,
    images: "/productCollection/manCollection.png",
    category: "Men Collection",
    heading: "Premium Casual Outfit For Men",
  },
];

const ProductCardBentoHorizontalData = [
  {
    id: 1,
    images: "/productCollection/fashion1.png",
  },
  {
    id: 2,
    images: "/productCollection/fashion2.png",
  },
];

const BentoGridProduct = () => {
  return (
    <motion.section
      className="grid grid-cols-10 gap-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div variants={staggerItem} className="col-span-6">
        <div className="flex gap-4">
          {ProductCardBentoHorizontalData.map((item) => (
            <ProductCardBentoHorizontal key={item.id} images={item.images} />
          ))}
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="grid col-span-4 gap-y-4">
        {productBentoData.map((item) => (
          <ProductCardBento
            key={item.id}
            images={item.images}
            category={item.category}
            heading={item.heading}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default BentoGridProduct;
