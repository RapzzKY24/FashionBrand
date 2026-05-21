import { SearchIcon, TruckIcon } from "lucide-react";
import Link from "next/link";

type SearchTrackingCardProps = {
  defaultValue?: string;
  actionHref?: string;
};

export const SearchTrackingCard = ({
  defaultValue,
  actionHref,
}: SearchTrackingCardProps) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
            Search Tracking Number
          </h2>

          <p className="mt-3 max-w-lg font-roboto text-sm leading-6 text-gray-500">
            Enter your tracking number to quickly find your shipment.
          </p>
        </div>

        <TruckIcon size={48} className="text-gray-200" />
      </div>

      <div className="mt-8 flex gap-4">
        <div className="relative flex-1">
          <SearchIcon
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Enter tracking number..."
            defaultValue={defaultValue}
            className="h-14 w-full rounded-md border border-gray-300 pl-12 pr-4 font-roboto text-sm outline-none"
          />
        </div>

        {actionHref ? (
          <Link
            href={actionHref}
            className="flex h-14 items-center justify-center rounded-md bg-black px-8 font-roboto text-sm text-white hover:bg-neutral-800 transition"
          >
            Track Now
          </Link>
        ) : (
          <button className="h-14 rounded-md bg-black px-8 font-roboto text-sm text-white hover:bg-neutral-800 transition">
            Search
          </button>
        )}
      </div>
    </div>
  );
};
