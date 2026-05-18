"use client";

import { useCartStore } from "../store/store";

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
    <button
      disabled={isOutOfStock}
      onClick={() => addToCart(productId, 1)}
      className={`h-14 flex-1 rounded-xl font-roboto text-sm uppercase tracking-[0.08em] transition ${
        isOutOfStock
          ? "cursor-not-allowed bg-gray-300 text-gray-500"
          : "bg-black text-white hover:bg-neutral-800"
      }`}
    >
      {isOutOfStock ? "Out of Stock" : "Add To Cart"}
    </button>
  );
};

export default ButtonAddToCart;
