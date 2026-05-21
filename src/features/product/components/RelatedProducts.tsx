"use client";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/src/animations/variants";
import { ProductCard, ProductCardProps } from "@/src/components/ProductCard";

export type Props = {
  products: ProductCardProps[];
};

export default function RelatedProducts({ products }: Props) {
  return (
    <>
      {products?.length > 0 && (
        <>
          <motion.div
            className="flex items-center justify-between pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="uppercase font-bold font-roboto text-[16px] tracking-[0.08em]">
              You May Also Like
            </h1>

            <div className="flex items-center gap-2">
              <Link
                className="uppercase font-bold font-roboto text-[16px] tracking-[0.08em]"
                href="/shop"
              >
                View All
              </Link>
              <ArrowRightIcon size={18} />
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {products?.map((item) => (
              <motion.div key={item.id} variants={staggerItem}>
                <ProductCard
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  stock_status={item.stock_status}
                />
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </>
  );
}
