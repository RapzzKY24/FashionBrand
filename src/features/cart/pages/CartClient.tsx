"use client";

import { useEffect } from "react";
import { useCartStore } from "../../product/store/store";
import { CartHeader } from "../components/cartHeader";
import { CartTable } from "../components/cartTable";
import { OrderSummary } from "../components/orderSummaryt";

export const CartClient = () => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const shipping = items.length > 0 ? 15000 : 0;
  const discount = 0;
  const total = totalPrice + shipping - discount;

  return (
    <section className="px-16 py-6 overflow-hidden w-full pt-26 flex flex-col gap-y-8">
      <CartHeader />

      <div className="grid grid-cols-12 gap-8 items-start">
        <CartTable items={items} />

        <OrderSummary
          subtotal={totalPrice}
          shipping={shipping}
          discount={discount}
          total={total}
          totalItems={items.length}
        />
      </div>
    </section>
  );
};
