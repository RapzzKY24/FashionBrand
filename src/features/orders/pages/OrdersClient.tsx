"use client";
import { motion } from "framer-motion";
import { Order } from "../types/orders.types";
import { OrderFilters } from "../components/OrderFilters";
import { OrderTabs } from "../components/OrderTabs";
import { OrderCard } from "../components/OrderCard";
import Reveal from "@/src/animations/Reveal";
import { staggerContainer, staggerItem } from "@/src/animations/variants";
import { useOrdersFilter } from "../hooks/useOrdersFilter";

type OrdersClientProps = {
  orders: Order[];
};

export const OrdersClient = ({ orders }: OrdersClientProps) => {
  const { activeTab, setActiveTab, searchQuery, setSearchQuery, filteredOrders, TABS } =
    useOrdersFilter(orders);

  return (
    <section className="space-y-8">
      <Reveal>
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
      </Reveal>

      <Reveal delay={0.1}>
        <OrderFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </Reveal>

      <Reveal delay={0.15}>
        <OrderTabs
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </Reveal>

      <motion.div
        key={activeTab}
        className="space-y-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {filteredOrders.map((order) => (
          <motion.div key={order.id} variants={staggerItem}>
            <OrderCard order={order} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
