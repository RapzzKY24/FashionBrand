import {
  ArrowRightIcon,
  CheckCircle2Icon,
  PackageSearchIcon,
  SearchIcon,
  TruckIcon,
} from "lucide-react";
import Link from "next/link";

const trackedOrders = [
  {
    id: "BLCK78945",
    status: "In Transit",
    updated: "May 22, 08:30 AM",
    destination: "Los Angeles, CA",
    progress: 75,
  },
  {
    id: "BLCK78812",
    status: "Delivered",
    updated: "May 18, 02:15 PM",
    destination: "New York, NY",
    progress: 100,
  },
  {
    id: "BLCK78655",
    status: "Processing",
    updated: "May 17, 10:45 AM",
    destination: "Chicago, IL",
    progress: 35,
  },
  {
    id: "BLCK78422",
    status: "Cancelled",
    updated: "May 12, 06:20 PM",
    destination: "Miami, FL",
    progress: 0,
  },
];

const TrackOrdersPage = () => {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
          <span>Home</span>
          <span>/</span>
          <span className="text-black">Track Orders</span>
        </div>

        <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
          TRACK ORDERS
        </h1>

        <p className="mt-3 font-roboto text-sm text-gray-500">
          View and manage all your tracked shipments.
        </p>
      </div>

      {/* Search */}
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
              className="h-14 w-full rounded-md border border-gray-300 pl-12 pr-4 font-roboto text-sm outline-none"
            />
          </div>

          <button className="h-14 rounded-md bg-black px-8 font-roboto text-sm text-white hover:bg-neutral-800 transition">
            Search
          </button>
        </div>
      </div>

      {/* Orders */}
      <div className="grid grid-cols-2 gap-6">
        {trackedOrders.map((order) => (
          <div
            key={order.id}
            className="rounded-md border border-gray-200 bg-white p-6"
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <h2 className="font-roboto text-xl font-bold">#{order.id}</h2>

                  <span
                    className={`rounded-full px-4 py-2 font-roboto text-xs ${
                      order.status === "Delivered"
                        ? "bg-gray-100 text-black"
                        : order.status === "Cancelled"
                          ? "bg-red-50 text-red-500"
                          : order.status === "Processing"
                            ? "bg-gray-100 text-black"
                            : "bg-black text-white"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <p className="mt-3 font-roboto text-sm text-gray-500">
                  Last updated {order.updated}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <PackageSearchIcon size={22} />
              </div>
            </div>

            {/* Progress */}
            <div className="mt-8">
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  style={{ width: `${order.progress}%` }}
                  className="h-full bg-black"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="font-roboto text-sm text-gray-500">
                  {order.destination}
                </p>

                <p className="font-roboto text-sm font-medium">
                  {order.progress}%
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="flex items-center gap-3">
                <CheckCircle2Icon size={18} />

                <p className="font-roboto text-sm">
                  {order.status === "Delivered"
                    ? "Package delivered successfully"
                    : order.status === "Cancelled"
                      ? "Shipment cancelled"
                      : "Shipment currently in progress"}
                </p>
              </div>

              <Link
                href={`/users/track-order/${order.id}`}
                className="flex items-center gap-2 font-roboto text-sm"
              >
                Track Now
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrackOrdersPage;
