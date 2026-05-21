import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Order, ShippingStatus } from "../../orders/types/orders.types";
import { STATUS_LABEL_MAP } from "../types/track-order.types";

type CurrentTrackingHeaderProps = {
  order: Order;
};

const statusStyles: Record<ShippingStatus, string> = {
  pending: "bg-black text-white",
  packed: "bg-gray-100 text-black",
  in_transit: "bg-black text-white",
  delivered: "bg-gray-100 text-black",
};

export const CurrentTrackingHeader = ({ order }: CurrentTrackingHeaderProps) => {
  const shippingStatus = order.shipping_status as ShippingStatus;
  const label = STATUS_LABEL_MAP[shippingStatus] ?? "Pending";

  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
          Current Tracking
        </h2>

        <div className="mt-4 flex items-center gap-4">
          <h3 className="font-roboto text-3xl font-bold">
            #{order.order_number}
          </h3>

          <span
            className={`rounded-full px-4 py-2 font-roboto text-xs ${
              statusStyles[shippingStatus] ?? "bg-gray-100 text-black"
            }`}
          >
            {label}
          </span>
        </div>
      </div>

      <Link
        href={`/users/orders/${order.id}`}
        className="flex h-11 items-center gap-2 rounded-md border border-gray-300 px-5 font-roboto text-sm hover:bg-gray-50"
      >
        View Details
        <ArrowRightIcon size={16} />
      </Link>
    </div>
  );
};
