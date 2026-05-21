"use client";

import { useState } from "react";
import { toast } from "sonner";
import { addToWishlistAction } from "../actions/wishlistAction";

export const useWishlist = (productId: string) => {
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

  return { isLiked, handleClick };
};
