"use server";

import { cookies } from "next/headers";
import { WishlistService } from "../services/wishlist";

export async function addToWishlistAction(productId: string): Promise<{
  success: boolean;
  message: string;
}> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return {
      success: false,
      message: "Please login to add items to your wishlist.",
    };
  }

  try {
    const response = await WishlistService.add(token, productId);

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
