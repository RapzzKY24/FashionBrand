"use client";

import { toast } from "sonner";
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

  const handleClick = () => {
    addToCart(productId, 1).catch(() =>
      toast.error("Failed to add item to cart"),
    );
  };

  return (
    <AnimatedButton
      disabled={isOutOfStock}
      onClick={handleClick}
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
