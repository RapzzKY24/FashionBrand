import { CreateCheckoutResponse } from "../types/checkout.types";

export const CheckoutService = {
  createCheckout: async (addressId: string) => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address_id: addressId }),
    });

    const json = (await res.json()) as CreateCheckoutResponse;

    if (!res.ok) {
      alert(json.message || "Checkout failed");
      return;
    }
    return json.data;
  },
};
