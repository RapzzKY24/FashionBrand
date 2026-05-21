"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, Trash2Icon } from "lucide-react";
import AnimatedButton from "@/src/components/AnimatedButton";
import { CartItemRow } from "./cartItemRow";
import { CartItem, useCartStore } from "../../product/store/store";
import { staggerContainer, staggerItem } from "@/src/animations/variants";
import Link from "next/link";

type CartTableProps = {
  items: CartItem[];
};

export const CartTable = ({ items }: CartTableProps) => {
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <motion.div
      className="col-span-9 border border-gray-200 rounded-md overflow-hidden bg-white"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={staggerItem}
        className="grid grid-cols-12 px-8 py-5 border-b border-gray-200"
      >
        <h2 className="col-span-5 text-[12px] uppercase tracking-[0.25em] font-roboto text-black">
          Product
        </h2>
        <h2 className="col-span-2 text-[12px] uppercase tracking-[0.25em] font-roboto text-black">
          Price
        </h2>
        <h2 className="col-span-3 text-[12px] uppercase tracking-[0.25em] font-roboto text-black">
          Quantity
        </h2>
        <h2 className="col-span-2 text-[12px] uppercase tracking-[0.25em] font-roboto text-black">
          Total
        </h2>
      </motion.div>

      <div className="px-8">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <CartItemRow key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </div>

      <motion.div variants={staggerItem} className="px-8 pb-6 pt-6">
        <div className="border border-gray-200 rounded-md h-16 flex items-center justify-between px-6">
          <Link href="/shop">
            <button className="flex items-center gap-3 font-roboto text-sm cursor-pointer text-black">
              <ArrowLeftIcon size={18} />
              Continue Shopping
            </button>
          </Link>

          <button
            className="flex items-center gap-3 font-roboto text-sm cursor-pointer text-red-500"
            onClick={() => clearCart()}
          >
            <Trash2Icon size={17} />
            Clear Cart
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
