import { apiFetch } from "@/src/shared/api";
import { CheckoutClient } from "./CheckoutClient";
import { Address, Cart, Profile } from "../types/checkout.types";

export default async function CheckoutPage() {
  const [profile, addresses, cart] = await Promise.all([
    apiFetch<{ data: Profile }>("/me", { cache: "no-store" }).then(
      (r) => r.data,
    ),
    apiFetch<{ data: Address[] }>("/addresses", { cache: "no-store" }).then(
      (r) => r.data,
    ),
    apiFetch<{ data: Cart }>("/cart", { cache: "no-store" }).then(
      (r) => r.data,
    ),
  ]);

  return <CheckoutClient profile={profile} addresses={addresses} cart={cart} />;
}
