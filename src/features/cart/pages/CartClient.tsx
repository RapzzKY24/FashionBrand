"use client";

import { CartHeader } from "../components/cartHeader";
import { CartTable } from "../components/cartTable";
import { OrderSummary } from "../components/orderSummary";
import Reveal from "@/src/animations/Reveal";
import { useCart } from "../hooks/useCart";

const CartSkeleton = () => (
  <div className="flex flex-col gap-y-8 animate-pulse">
    <div className="h-8 w-48 bg-gray-200 rounded" />
    <div className="grid grid-cols-12 gap-8 items-start">
      <div className="col-span-9 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-gray-100 rounded-md" />
        ))}
      </div>
      <div className="col-span-3 h-96 bg-gray-100 rounded-md" />
    </div>
  </div>
);

export const CartClient = () => {
  const { items, totalPrice, shipping, discount, total, isLoading } = useCart();

  if (isLoading) {
    return (
      <section className="px-16 py-6 overflow-hidden w-full pt-26 flex flex-col gap-y-8">
        <CartSkeleton />
      </section>
    );
  }

  return (
    <section className="px-16 py-6 overflow-hidden w-full pt-26 flex flex-col gap-y-8">
      <Reveal>
        <CartHeader />
      </Reveal>

      <div className="grid grid-cols-12 gap-8 items-start">
        <CartTable items={items} />

        <Reveal delay={0.2} className="col-span-3">
          <OrderSummary
            subtotal={totalPrice}
            shipping={shipping}
            discount={discount}
            total={total}
            totalItems={items.length}
          />
        </Reveal>
      </div>
    </section>
  );
};
