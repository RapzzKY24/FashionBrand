"use client";

import { useMemo, useState } from "react";
import { Order } from "../types/orders.types";

const TABS = [
  "All Orders",
  "Processing",
  "In Transit",
  "Delivered",
  "Cancelled",
];

const TAB_MAP: Record<string, string> = {
  Processing: "processing",
  "In Transit": "shipped",
  Delivered: "delivered",
  Cancelled: "cancelled",
};

export const useOrdersFilter = (orders: Order[]) => {
  const [activeTab, setActiveTab] = useState("All Orders");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = useMemo(() => {
    let filtered = orders;

    if (activeTab !== "All Orders") {
      const targetStatus = TAB_MAP[activeTab];
      filtered = filtered.filter((o) => o.order_status === targetStatus);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (o) =>
          o.order_number.toLowerCase().includes(q) ||
          o.items.some((item) => item.product_name.toLowerCase().includes(q)),
      );
    }

    return filtered;
  }, [orders, activeTab, searchQuery]);

  return { activeTab, setActiveTab, searchQuery, setSearchQuery, filteredOrders, TABS };
};
