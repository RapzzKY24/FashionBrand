import { cookies } from "next/headers";
import { CheckoutClient } from "./CheckoutClient";

async function getData(path: string) {
  const token = (await cookies()).get("token")?.value;

  const res = await fetch(`http://localhost:8080/api/v1${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const json = await res.json();
  return json.data;
}

export default async function CheckoutPage() {
  const [profile, addresses, cart] = await Promise.all([
    getData("/me"),
    getData("/addresses"),
    getData("/cart"),
  ]);

  return <CheckoutClient profile={profile} addresses={addresses} cart={cart} />;
}
