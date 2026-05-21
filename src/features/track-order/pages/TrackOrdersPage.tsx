import { OrderService } from "../../orders/services/orders";
import { SearchTrackingCard } from "../components/SearchTrackingCard";
import { TrackedOrderCard } from "../components/TrackedOrderCard";
import Reveal from "@/src/animations/Reveal";

export default async function TrackOrdersPage() {
  const orders = await OrderService.getOrders();

  return (
    <section className="space-y-8">
      <Reveal>
        <div>
          <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
            <span>Home</span>
            <span>/</span>
            <span className="text-black">Track Orders</span>
          </div>

          <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
            TRACK ORDERS
          </h1>

          <p className="mt-3 font-roboto text-sm text-gray-500">
            View and manage all your tracked shipments.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <SearchTrackingCard />
      </Reveal>

      <Reveal delay={0.15}>
        <div className="grid grid-cols-2 gap-6">
          {orders.map((order) => (
            <TrackedOrderCard key={order.id} order={order} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
