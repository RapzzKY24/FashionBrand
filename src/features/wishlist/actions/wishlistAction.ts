"use server";

import { WishlistService } from "../services/wishlist";

export async function addToWishlistAction(productId: string): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    const response = await WishlistService.add(productId);

    if (response.status === "success") {
      return { success: true, message: "Added to Wishlist!" };
    }

    return {
      success: false,
      message: response.message || "Failed to add to wishlist.",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
