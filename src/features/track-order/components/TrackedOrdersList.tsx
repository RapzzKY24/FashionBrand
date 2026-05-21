import { PackageSearchIcon } from "lucide-react";
import Link from "next/link";
import { Order, ShippingStatus } from "../../orders/types/orders.types";
import { PROGRESS_MAP, STATUS_LABEL_MAP } from "../types/track-order.types";

type TrackedOrdersListProps = {
  orders: Order[];
  currentOrderNumber: string;
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const statusStyles: Record<ShippingStatus, string> = {
  pending: "bg-black text-white",
  packed: "bg-gray-100 text-black",
  in_transit: "bg-black text-white",
  delivered: "bg-gray-100 text-black",
};

export const TrackedOrdersList = ({
  orders,
  currentOrderNumber,
}: TrackedOrdersListProps) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
        Tracked Orders
      </h2>

      <div className="mt-6 space-y-5">
        {orders.map((order) => {
          const shippingStatus = order.shipping_status as ShippingStatus;
          const progress = PROGRESS_MAP[shippingStatus] ?? 0;
          const label = STATUS_LABEL_MAP[shippingStatus] ?? "Pending";
          const lastTracking = order.tracking[order.tracking.length - 1];
          const destination = lastTracking?.location ?? "Standard Shipping";
          const isCurrent = order.order_number === currentOrderNumber;

          return (
            <Link
              href={`/users/track-order/${order.order_number}`}
              key={order.id}
              className={`block rounded-md border p-5 transition ${
                isCurrent
                  ? "border-black"
                  : "border-gray-200 hover:border-black/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-roboto text-sm font-bold">
                  #{order.order_number}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 font-roboto text-xs ${
                    statusStyles[shippingStatus] ?? "bg-gray-100 text-black"
                  }`}
                >
                  {label}
                </span>
              </div>

              <div className="mt-4">
                <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-black"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between font-roboto text-xs text-gray-500">
                  <span>Updated {formatDate(order.updated_at)}</span>
                  <span>{progress}%</span>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <PackageSearchIcon size={16} />
                <p className="font-roboto text-sm text-gray-600">
                  {destination}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
