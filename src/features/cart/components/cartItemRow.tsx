"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeartIcon, MinusIcon, PlusIcon, XIcon } from "lucide-react";
import { CartItem, useCartStore } from "../../product/store/store";
import { formatRupiah } from "@/src/utils/formatCurrency";

type CartItemRowProps = {
  item: CartItem;
};

export const CartItemRow = ({ item }: CartItemRowProps) => {
  const updateQty = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  return (
    <motion.div
      className="grid grid-cols-12 items-center gap-6 py-6 border-b border-gray-200 last:border-b-0"
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
    >
      <div className="col-span-5 flex items-center gap-7">
        <div className="relative w-40 h-40 bg-neutral-100 rounded-md overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-y-3">
          <h3 className="font-roboto font-bold text-[16px] text-black">
            {item.name}
          </h3>



          <button className="flex items-center gap-2 text-gray-500 hover:text-black transition w-fit">
            <HeartIcon size={16} />
            <span className="font-roboto text-sm">Move to Wishlist</span>
          </button>
        </div>
      </div>

      <div className="col-span-2">
        <p className="font-roboto text-xl text-black">
          {formatRupiah(item.price)}
        </p>
      </div>

      <div className="col-span-3">
        <div className="flex w-32 h-11 bg-white border border-gray-300 rounded-md overflow-hidden">
          <button
            className="flex-1 flex items-center justify-center hover:bg-gray-50 transition"
            onClick={() => {
              if (item.quantity < 1) return;
              updateQty(item.id, item.quantity - 1);
            }}
          >
            <MinusIcon size={16} />
          </button>

          <motion.div
            className="flex-1 flex items-center justify-center font-roboto text-[16px]"
            key={item.quantity}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.15 }}
          >
            {item.quantity}
          </motion.div>

          <button
            className="flex-1 flex items-center justify-center hover:bg-gray-50 transition"
            onClick={() => updateQty(item.id, item.quantity + 1)}
          >
            <PlusIcon size={16} />
          </button>
        </div>
      </div>

      <div className="col-span-2 flex items-center justify-between">
        <p className="font-roboto font-bold text-xl text-black">
          {formatRupiah(item.subtotal)}
        </p>

        <button
          className="text-gray-500 hover:text-black transition"
          onClick={() => removeItem(item.id)}
        >
          <XIcon size={18} />
        </button>
      </div>
    </motion.div>
  );
};
