import { create } from "zustand";

export type CartItem = {
  id: string;
  product_id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  quantity: number;
  subtotal: number;
  stock: number;
  stock_status: "in_stock" | "out_of_stock";
  created_at: string;
  updated_at: string;
};

type CartState = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  fetchCart: () => Promise<void>;
  addToCart: (productId: string, quantity: number) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  removeItem: (cartId: string) => Promise<void>;
  clearCart: () => Promise<void>;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  totalItems: 0,
  totalPrice: 0,

  fetchCart: async () => {
    const res = await fetch("/api/cart");
    const json = await res.json();

    if (!res.ok) {
      set({
        items: [],
        totalItems: 0,
        totalPrice: 0,
      });
      return;
    }

    set({
      items: json.data.items,
      totalItems: json.data.total_items,
      totalPrice: json.data.total_price,
    });
  },

  addToCart: async (productId, quantity) => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: productId,
        quantity,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to add product to cart");
    }

    const json = await res.json();

    set({
      items: json.data.items,
      totalItems: json.data.total_items,
      totalPrice: json.data.total_price,
    });
  },

  updateQuantity: async (productId: string, quantity: number) => {
    const res = await fetch(`/api/cart/${productId}`, {
      method: "PUT",
      body: JSON.stringify({
        quantity: quantity,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to decrease or increase product");
    }

    const json = await res.json();
    set({
      items: json.data.items,
      totalItems: json.data.total_items,
      totalPrice: json.data.total_price,
    });
  },

  removeItem: async (cartId: string) => {
    const res = await fetch(`/api/cart/${cartId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed remove item");
    }

    await useCartStore.getState().fetchCart();
  },

  clearCart: async () => {
    const res = await fetch(`/api/cart`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed clear cart");
    }

    await useCartStore.getState().fetchCart();
  },
}));
