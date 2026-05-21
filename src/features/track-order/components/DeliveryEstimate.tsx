import { CheckCircle2Icon } from "lucide-react";
import { Order, ShippingStatus } from "../../orders/types/orders.types";

type DeliveryEstimateProps = {
  order: Order;
};

const estimateMap: Record<ShippingStatus, string> = {
  pending: "No estimate available",
  packed: "2-3 business days",
  in_transit: "1-2 business days",
  delivered: "Delivered",
};

export const DeliveryEstimate = ({ order }: DeliveryEstimateProps) => {
  const shippingStatus = order.shipping_status as ShippingStatus;
  const estimate = estimateMap[shippingStatus] ?? "No estimate available";
  const courier = order.tracking_number
    ? `TRK${order.tracking_number.slice(-4)}`
    : "-";

  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
        Delivery Estimate
      </h2>

      <div className="mt-6 rounded-md bg-gray-50 p-6">
        <div className="flex items-center gap-4">
          <CheckCircle2Icon size={28} />

          <div>
            <p className="font-roboto text-sm font-bold">
              Estimated Arrival
            </p>

            <p className="mt-2 font-roboto text-sm text-gray-500">
              {estimate}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {[
          ["Courier", "UPS Express"],
          ["Shipping Method", "Priority Delivery"],
          ["Tracking Number", courier],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between font-roboto text-sm"
          >
            <span className="text-gray-500">{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
