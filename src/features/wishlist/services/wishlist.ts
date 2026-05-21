import { apiFetch } from "@/src/shared/api";
import { ApiError } from "@/src/shared/api/errors";

export type WishlistResponse = {
  status: string;
  message: string;
  data?: unknown;
};

export type WishlistItem = {
  id: string;
  product_id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  stock: number;
  stock_status: string;
  is_new_arrival: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
};

export const WishlistService = {
  add: async (productId: string): Promise<WishlistResponse> => {
    try {
      return await apiFetch<WishlistResponse>("/wishlist", {
        method: "POST",
        body: { product_id: productId },
      });
    } catch (e) {
      if (e instanceof ApiError) {
        return {
          status: "error",
          message: e.message,
          data: e.data,
        };
      }
      return { status: "error", message: "Something went wrong" };
    }
  },

  getAll: async (): Promise<WishlistItem[]> => {
    try {
      const json = await apiFetch<{ data: WishlistItem[] }>("/wishlist", {
        cache: "no-store",
      });
      return json.data ?? [];
    } catch {
      return [];
    }
  },
};
