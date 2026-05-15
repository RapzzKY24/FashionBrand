import {
  ArrowRightIcon,
  CheckCircle2Icon,
  CircleIcon,
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
];

const timeline = [
  { title: "Order Placed", date: "May 20, 10:24 AM", active: true },
  { title: "Processing", date: "May 20, 02:15 PM", active: true },
  { title: "Shipped", date: "May 21, 09:40 AM", active: true },
  { title: "In Transit", date: "May 22, 08:30 AM", active: true },
  { title: "Delivered", date: "Estimated May 24", active: false },
];

const latestUpdates = [
  {
    title: "In Transit",
    date: "May 22, 08:30 AM",
    desc: "Package is on the way to destination.",
    active: true,
  },
  {
    title: "Departed Facility",
    date: "May 21, 11:20 PM",
    desc: "Package left sorting facility.",
  },
  {
    title: "Arrived at Facility",
    date: "May 21, 06:45 PM",
    desc: "Package arrived at sorting facility.",
  },
];

const TrackOrderDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const currentOrder =
    trackedOrders.find((order) => order.id === id) || trackedOrders[0];

  return (
    <section className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
          <Link href="/users">Home</Link>
          <span>/</span>
          <Link href="/users/track-order">Track Orders</Link>
          <span>/</span>
          <span className="text-black">#{currentOrder.id}</span>
        </div>

        <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
          TRACK ORDER
        </h1>

        <p className="mt-3 font-roboto text-sm text-gray-500">
          Track the latest status of order #{currentOrder.id}.
        </p>
      </div>

      {/* Search Tracking */}
      <div className="rounded-md border border-gray-200 bg-white p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Track Your Package
            </h2>

            <p className="mt-3 max-w-lg font-roboto text-sm leading-6 text-gray-500">
              Enter your tracking number to get real-time delivery updates.
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
              defaultValue={currentOrder.id}
              className="h-14 w-full rounded-md border border-gray-300 pl-12 pr-4 font-roboto text-sm outline-none"
            />
          </div>

          <Link
            href={`/users/track-order/${currentOrder.id}`}
            className="flex h-14 items-center justify-center rounded-md bg-black px-8 font-roboto text-sm text-white hover:bg-neutral-800 transition"
          >
            Track Now
          </Link>
        </div>
      </div>

      {/* Active Tracking */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left */}
        <div className="col-span-8 rounded-md border border-gray-200 bg-white p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
                Current Tracking
              </h2>

              <div className="mt-4 flex items-center gap-4">
                <h3 className="font-roboto text-3xl font-bold">
                  #{currentOrder.id}
                </h3>

                <span
                  className={`rounded-full px-4 py-2 font-roboto text-xs ${
                    currentOrder.status === "Delivered"
                      ? "bg-gray-100 text-black"
                      : currentOrder.status === "Processing"
                        ? "bg-gray-100 text-black"
                        : "bg-black text-white"
                  }`}
                >
                  {currentOrder.status}
                </span>
              </div>
            </div>

            <Link
              href={`/users/orders/${currentOrder.id}`}
              className="flex h-11 items-center gap-2 rounded-md border border-gray-300 px-5 font-roboto text-sm hover:bg-gray-50"
            >
              View Details
              <ArrowRightIcon size={16} />
            </Link>
          </div>

          {/* Timeline */}
          <div className="mt-14 flex items-center justify-between">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className="relative flex flex-1 flex-col items-center"
              >
                <div
                  className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border ${
                    item.active
                      ? "border-black bg-black text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {item.active && (
                    <div className="h-2 w-2 rounded-full bg-white" />
                  )}
                </div>

                {index !== timeline.length - 1 && (
                  <div
                    className={`absolute left-1/2 top-4 h-px w-full ${
                      item.active ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                )}

                <div className="mt-4 text-center">
                  <p className="font-roboto text-xs font-medium uppercase">
                    {item.title}
                  </p>

                  <p className="mt-1 font-roboto text-xs text-gray-500">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="mt-12 rounded-md bg-gray-50 p-6">
            <div className="flex items-center gap-5">
              <TruckIcon size={28} />

              <div>
                <h4 className="font-roboto text-sm font-bold">
                  Your order is on the move!
                </h4>

                <p className="mt-2 font-roboto text-sm text-gray-500">
                  Package departed from sorting facility and is currently on the
                  way to {currentOrder.destination}.
                </p>
              </div>
            </div>
          </div>

          {/* Live Updates */}
          <div className="mt-10">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Latest Updates
            </h2>

            <div className="mt-8 space-y-8">
              {latestUpdates.map((item, index) => (
                <div key={index} className="relative flex gap-5">
                  <div className="relative flex flex-col items-center">
                    <CircleIcon
                      size={14}
                      className={
                        item.active
                          ? "fill-black text-black"
                          : "fill-white text-gray-400"
                      }
                    />

                    {index !== latestUpdates.length - 1 && (
                      <div className="mt-2 h-16 w-px bg-gray-300" />
                    )}
                  </div>

                  <div>
                    <h3 className="font-roboto text-sm font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-1 font-roboto text-xs text-gray-500">
                      {item.date}
                    </p>

                    <p className="mt-2 font-roboto text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-4 space-y-6">
          {/* Tracked Orders */}
          <div className="rounded-md border border-gray-200 bg-white p-6">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Tracked Orders
            </h2>

            <div className="mt-6 space-y-5">
              {trackedOrders.map((order) => (
                <Link
                  href={`/users/track-order/${order.id}`}
                  key={order.id}
                  className={`block rounded-md border p-5 transition ${
                    order.id === currentOrder.id
                      ? "border-black"
                      : "border-gray-200 hover:border-black/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-roboto text-sm font-bold">
                      #{order.id}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 font-roboto text-xs ${
                        order.status === "Delivered"
                          ? "bg-gray-100 text-black"
                          : order.status === "Processing"
                            ? "bg-gray-100 text-black"
                            : "bg-black text-white"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                      <div
                        style={{ width: `${order.progress}%` }}
                        className="h-full bg-black"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between font-roboto text-xs text-gray-500">
                      <span>Updated {order.updated}</span>
                      <span>{order.progress}%</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <PackageSearchIcon size={16} />
                    <p className="font-roboto text-sm text-gray-600">
                      {order.destination}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Delivery Estimate */}
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
                    Friday, May 24
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {[
                ["Courier", "UPS Express"],
                ["Shipping Method", "Priority Delivery"],
                ["Tracking Number", `${currentOrder.id}6123`],
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
        </div>
      </div>
    </section>
  );
};

export default TrackOrderDetailPage;
