const BASE_URL = "http://localhost:8080/api/v1";

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
  add: async (token: string, productId: string): Promise<WishlistResponse> => {
    const res = await fetch(`${BASE_URL}/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ product_id: productId }),
    });

    const json = (await res.json()) as WishlistResponse;
    return json;
  },

  getAll: async (token: string): Promise<WishlistItem[]> => {
    const res = await fetch(`${BASE_URL}/wishlist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const json = await res.json();
    return json.data ?? [];
  },
};
