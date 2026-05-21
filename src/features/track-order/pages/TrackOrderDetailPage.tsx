import Link from "next/link";
import { OrderService } from "../../orders/services/orders";
import { SearchTrackingCard } from "../components/SearchTrackingCard";
import { CurrentTrackingHeader } from "../components/CurrentTrackingHeader";
import { TrackingTimeline } from "../components/TrackingTimeline";
import { TrackingNotice } from "../components/TrackingNotice";
import { LatestUpdates } from "../components/LatestUpdates";
import { TrackedOrdersList } from "../components/TrackedOrdersList";
import { DeliveryEstimate } from "../components/DeliveryEstimate";
import { STATUS_LABEL_MAP } from "../types/track-order.types";
import { ShippingStatus } from "../../orders/types/orders.types";

type TrackOrderDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function TrackOrderDetailPage({
  params,
}: TrackOrderDetailPageProps) {
  const { id } = await params;
  const [order, allOrders] = await Promise.all([
    OrderService.getOrderByNumber(id),
    OrderService.getOrders(),
  ]);

  if (!order) {
    return (
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
            <Link href="/users">Home</Link>
            <span>/</span>
            <Link href="/users/track-order">Track Orders</Link>
            <span>/</span>
            <span className="text-black">#{id}</span>
          </div>

          <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
            TRACK ORDER
          </h1>

          <p className="mt-3 font-roboto text-sm text-gray-500">
            Order not found.
          </p>
        </div>
      </section>
    );
  }

  const shippingStatus = order.shipping_status as ShippingStatus;
  const currentLabel = STATUS_LABEL_MAP[shippingStatus] ?? "Pending";

  return (
    <section className="space-y-8">
      <div>
        <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
          <Link href="/users">Home</Link>
          <span>/</span>
          <Link href="/users/track-order">Track Orders</Link>
          <span>/</span>
          <span className="text-black">#{order.order_number}</span>
        </div>

        <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
          TRACK ORDER
        </h1>

        <p className="mt-3 font-roboto text-sm text-gray-500">
          Track the latest status of order #{order.order_number}.
        </p>
      </div>

      <SearchTrackingCard
        defaultValue={order.order_number}
        actionHref={`/users/track-order/${order.order_number}`}
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 rounded-md border border-gray-200 bg-white p-8">
          <CurrentTrackingHeader order={order} />

          <TrackingTimeline currentStatus={currentLabel} />

          <TrackingNotice order={order} />

          <LatestUpdates tracking={order.tracking} />
        </div>

        <div className="col-span-4 space-y-6">
          <TrackedOrdersList
            orders={allOrders}
            currentOrderNumber={order.order_number}
          />

          <DeliveryEstimate order={order} />
        </div>
      </div>
    </section>
  );
}
