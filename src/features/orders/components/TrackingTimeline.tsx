import { CircleIcon, CopyIcon } from "lucide-react";
import { OrderTracking } from "../types/orders.types";

type TrackingTimelineProps = {
  tracking: OrderTracking[];
  trackingNumber: string;
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const TrackingTimeline = ({ tracking, trackingNumber }: TrackingTimelineProps) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
        Tracking Details
      </h2>

      <div className="mt-8 space-y-8">
        {tracking.map((item, index) => (
          <div key={item.id} className="relative flex gap-5">
            <div className="relative flex flex-col items-center">
              <CircleIcon
                size={14}
                className={
                  index === 0
                    ? "fill-black text-black"
                    : "fill-white text-gray-400"
                }
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

      <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
        <span className="font-roboto text-sm font-medium">
          Tracking Number
        </span>

        <div className="flex items-center gap-2">
          <span className="font-roboto text-sm">{trackingNumber}</span>

          <button>
            <CopyIcon size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
