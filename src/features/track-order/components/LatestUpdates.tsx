import { CircleIcon } from "lucide-react";
import { OrderTracking } from "../../orders/types/orders.types";

type LatestUpdatesProps = {
  tracking: OrderTracking[];
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

export const LatestUpdates = ({ tracking }: LatestUpdatesProps) => {
  return (
    <div className="mt-10">
      <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
        Latest Updates
      </h2>

      <div className="mt-8 space-y-8">
        {tracking.map((item, index) => (
          <div key={item.id} className="relative flex gap-5">
            <div className="relative flex flex-col items-center">
              <CircleIcon
                size={14}
                className="fill-black text-black"
              />

              {index !== tracking.length - 1 && (
                <div className="mt-2 h-16 w-px bg-gray-300" />
              )}
            </div>

            <div>
              <h3 className="font-roboto text-sm font-bold">
                {item.status}
              </h3>

              <p className="mt-1 font-roboto text-xs text-gray-500">
                {formatDate(item.created_at)}
              </p>

              <p className="mt-2 font-roboto text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
