import { TruckIcon } from "lucide-react";
import { Order } from "../../orders/types/orders.types";

type TrackingNoticeProps = {
  order: Order;
};

export const TrackingNotice = ({ order }: TrackingNoticeProps) => {
  const lastTracking = order.tracking[order.tracking.length - 1];
  const destination = lastTracking?.location ?? "Standard Shipping";

  return (
    <div className="mt-12 rounded-md bg-gray-50 p-6">
      <div className="flex items-center gap-5">
        <TruckIcon size={28} />

        <div>
          <h4 className="font-roboto text-sm font-bold">
            Your order is on the move!
          </h4>

          <p className="mt-2 font-roboto text-sm text-gray-500">
            Package departed from sorting facility and is currently on the
            way to {destination}.
          </p>
        </div>
      </div>
    </div>
  );
};
