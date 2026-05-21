import { cookies } from "next/headers";
import { Address, Order } from "../types/orders.types";

const BASE_URL = "http://localhost:8080/api/v1";

export const OrderService = {
  getOrders: async (): Promise<Order[]> => {
    const token = (await cookies()).get("token")?.value;

    const res = await fetch(`${BASE_URL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const json = await res.json();
    return json.data ?? [];
  },

  getOrderById: async (id: string): Promise<Order | null> => {
    const token = (await cookies()).get("token")?.value;

    const res = await fetch(`${BASE_URL}/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const json = await res.json();
    return json.data ?? null;
  },

  getOrderByNumber: async (orderNumber: string): Promise<Order | null> => {
    const token = (await cookies()).get("token")?.value;

    const res = await fetch(`${BASE_URL}/orders/number/${orderNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const json = await res.json();
    return json.data ?? null;
  },

  getPrimaryAddress: async (): Promise<Address | null> => {
    const token = (await cookies()).get("token")?.value;

    const res = await fetch(`${BASE_URL}/addresses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const json = await res.json();
    const addresses: Address[] = json.data ?? [];
    return addresses.find((a) => a.is_primary) ?? addresses[0] ?? null;
  },
};
