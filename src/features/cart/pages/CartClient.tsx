"use client";

import { CartHeader } from "../components/cartHeader";
import { CartTable } from "../components/cartTable";
import { OrderSummary } from "../components/orderSummary";
import Reveal from "@/src/animations/Reveal";
import { useCart } from "../hooks/useCart";

export const CartClient = () => {
  const { items, totalPrice, shipping, discount, total } = useCart();

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
