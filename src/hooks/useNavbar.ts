"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCartStore } from "../features/product/store/store";

export const useNavbar = (isLoggedIn: boolean, userRole?: string) => {
  const totalItems = useCartStore((state) => state.totalItems);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const pathname = usePathname();
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      fetchCart();
    }
  }, [isLoggedIn, fetchCart]);

  const userHref = userRole === "admin" ? "/admin" : "/users";

  return { totalItems, pathname, openSearch, setOpenSearch, userHref };
};
