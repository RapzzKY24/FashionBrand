"use client";
import { useState, useMemo } from "react";
import { Order } from "../types/orders.types";
import { OrderFilters } from "../components/OrderFilters";
import { OrderTabs } from "../components/OrderTabs";
import { OrderCard } from "../components/OrderCard";

const TABS = ["All Orders", "In Transit", "Delivered", "Cancelled"];

type OrdersClientProps = {
  orders: Order[];
};

export const OrdersClient = ({ orders }: OrdersClientProps) => {
  const [activeTab, setActiveTab] = useState("All Orders");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = useMemo(() => {
    let filtered = orders;

    if (activeTab !== "All Orders") {
      const tabMap: Record<string, string> = {
        "In Transit": "shipped",
        Delivered: "delivered",
        Cancelled: "cancelled",
      };
      const targetStatus = tabMap[activeTab];
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

  return (
    <section className="space-y-8">
      <div>
        <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
          <span>Home</span>
          <span>/</span>
          <span className="text-black">My Orders</span>
        </div>
        <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
          MY ORDERS
        </h1>
        <p className="mt-3 font-roboto text-sm text-gray-500">
          Track and manage all your recent purchases.
        </p>
      </div>

      <OrderFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <OrderTabs
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="space-y-5">
        {filteredOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
};
