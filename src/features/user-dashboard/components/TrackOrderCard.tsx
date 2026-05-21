import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const TrackOrderCard = () => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
        Track Your Order
      </h2>

      <p className="mt-4 max-w-md font-roboto text-sm leading-6 text-gray-500">
        Enter your tracking number to check the latest status of your package.
      </p>

      <div className="mt-6 flex gap-3">
        <input
          type="text"
          placeholder="Enter tracking number"
          className="h-12 flex-1 rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none"
        />
        <button className="h-12 rounded-md bg-black px-8 font-roboto text-sm text-white">
          Track Now
        </button>
      </div>

      <Link
        href="/users/track-order"
        className="mt-6 flex items-center gap-2 font-roboto text-sm"
      >
        View all tracked orders
        <ArrowRightIcon size={16} />
      </Link>
    </div>
  );
};
