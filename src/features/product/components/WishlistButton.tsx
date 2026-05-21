"use client";

import { useState } from "react";
import { HeartIcon } from "lucide-react";
import { toast } from "sonner";
import { addToWishlistAction } from "@/src/features/wishlist/actions/wishlistAction";

type WishlistButtonProps = {
  productId: string;
};

const WishlistButton = ({ productId }: WishlistButtonProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = async () => {
    if (isLiked) return;

    const result = await addToWishlistAction(productId);

    if (result.success) {
      setIsLiked(true);
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

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
