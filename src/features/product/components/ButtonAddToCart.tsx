"use client";

import { useCartStore } from "../store/store";
import AnimatedButton from "@/src/components/AnimatedButton";

const ButtonAddToCart = ({
  productId,
  stock_status,
}: {
  productId: string;
  stock_status: string;
}) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const isOutOfStock = stock_status === "out_of_stock";

  return (
    <AnimatedButton
      disabled={isOutOfStock}
      onClick={() => addToCart(productId, 1)}
      className={`h-14 flex-1 rounded-xl font-roboto text-sm uppercase tracking-[0.08em] ${
        isOutOfStock
          ? "disabled:cursor-not-allowed disabled:opacity-100 bg-gray-300 text-gray-500"
          : "bg-black text-white"
      }`}
    >
      {isOutOfStock ? "Out of Stock" : "Add To Cart"}
    </AnimatedButton>
  );
};

export default ButtonAddToCart;
