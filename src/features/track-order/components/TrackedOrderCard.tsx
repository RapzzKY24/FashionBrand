import { ArrowRightIcon, CheckCircle2Icon, PackageSearchIcon } from "lucide-react";
import Link from "next/link";
import { Order, ShippingStatus } from "../../orders/types/orders.types";
import { PROGRESS_MAP, STATUS_LABEL_MAP } from "../types/track-order.types";

type TrackedOrderCardProps = {
  order: Order;
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

export const TrackedOrderCard = ({ order }: TrackedOrderCardProps) => {
  const shippingStatus = order.shipping_status as ShippingStatus;
  const progress = PROGRESS_MAP[shippingStatus] ?? 0;
  const label = STATUS_LABEL_MAP[shippingStatus] ?? "Pending";
  const lastTracking = order.tracking[order.tracking.length - 1];
  const destination = lastTracking?.location ?? "Standard Shipping";

  const cancelled = order.order_status === "cancelled";
  const message =
    shippingStatus === "delivered"
      ? "Package delivered successfully"
      : cancelled
        ? "Shipment cancelled"
        : "Shipment currently in progress";

  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-4">
            <h2 className="font-roboto text-xl font-bold">
              #{order.order_number}
            </h2>

            <span
              className={`rounded-full px-4 py-2 font-roboto text-xs ${
                statusStyles[shippingStatus] ?? "bg-gray-100 text-black"
              }`}
            >
              {label}
            </span>
          </div>

          <p className="mt-3 font-roboto text-sm text-gray-500">
            Last updated {formatDate(order.updated_at)}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          <PackageSearchIcon size={22} />
        </div>
      </div>

      <div className="mt-8">
        <div className="h-2 overflow-hidden rounded-full bg-gray-200">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-black"
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="font-roboto text-sm text-gray-500">{destination}</p>
          <p className="font-roboto text-sm font-medium">{progress}%</p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
        <div className="flex items-center gap-3">
          <CheckCircle2Icon size={18} />
          <p className="font-roboto text-sm">{message}</p>
        </div>

        <Link
          href={`/users/track-order/${order.order_number}`}
          className="flex items-center gap-2 font-roboto text-sm"
        >
          Track Now
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </div>
  );
};
