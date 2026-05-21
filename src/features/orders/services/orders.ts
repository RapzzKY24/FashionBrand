import { apiFetch } from "@/src/shared/api";
import { Address, Order } from "../types/orders.types";

export const OrderService = {
  getOrders: async (): Promise<Order[]> => {
    const json = await apiFetch<{ data: Order[] }>("/orders", {
      cache: "no-store",
    });
    return json.data ?? [];
  },

  getOrderById: async (id: string): Promise<Order | null> => {
    try {
      const json = await apiFetch<{ data: Order }>(`/orders/${id}`, {
        cache: "no-store",
      });
      return json.data ?? null;
    } catch {
      return null;
    }
  },

  getOrderByNumber: async (orderNumber: string): Promise<Order | null> => {
    try {
      const json = await apiFetch<{ data: Order }>(
        `/orders/number/${orderNumber}`,
        { cache: "no-store" },
      );
      return json.data ?? null;
    } catch {
      return null;
    }
  },

  getPrimaryAddress: async (): Promise<Address | null> => {
    try {
      const json = await apiFetch<{ data: Address[] }>("/addresses", {
        cache: "no-store",
      });
      const addresses: Address[] = json.data ?? [];
      return addresses.find((a) => a.is_primary) ?? addresses[0] ?? null;
    } catch {
      return null;
    }
  },
};
