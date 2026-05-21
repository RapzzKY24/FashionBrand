"use client";

import { useEffect, useMemo } from "react";
import { useCartStore } from "../../product/store/store";

export const useCart = () => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const shipping = items.length > 0 ? 15000 : 0;
  const discount = 0;
  const total = totalPrice + shipping - discount;

  return useMemo(
    () => ({ items, totalPrice, shipping, discount, total }),
    [items, totalPrice, shipping, discount, total],
  );
};
