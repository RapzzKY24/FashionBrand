"use client";

import { HeartIcon } from "lucide-react";
import { useWishlist } from "@/src/features/wishlist/hooks/useWishlist";

type WishlistButtonProps = {
  productId: string;
};

const WishlistButton = ({ productId }: WishlistButtonProps) => {
  const { isLiked, handleClick } = useWishlist(productId);

  return (
    <button
      onClick={handleClick}
      className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition"
    >
      <HeartIcon
        size={20}
        className={isLiked ? "fill-red-500 text-red-500" : "text-gray-700"}
      />
    </button>
  );
};

export default WishlistButton;
