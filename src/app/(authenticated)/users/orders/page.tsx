import { ArrowRightIcon, PackageIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const orders = [
  {
    id: "BLCK78945",
    image: "/hoddieCollection/hoddie1.png",
    name: "Men BLVCK Grey Hoodie",
    date: "May 20, 2024",
    total: "$180.00",
    items: 1,
    status: "In Transit",
  },
  {
    id: "BLCK78812",
    image: "/hoddieCollection/hoddie4.png",
    name: "Hip Hop Street Wear Hoodie",
    date: "May 15, 2024",
    total: "$240.00",
    items: 2,
    status: "Delivered",
  },
  {
    id: "BLCK78655",
    image: "/hoddieCollection/hoddie2.png",
    name: "Retro Rapper Tupac Hoodie",
    date: "May 10, 2024",
    total: "$100.00",
    items: 1,
    status: "Delivered",
  },
  {
    id: "BLCK78422",
    image: "/hoddieCollection/hoddie5.png",
    name: "LHR London England Hoodie",
    date: "May 05, 2024",
    total: "$250.00",
    items: 1,
    status: "Cancelled",
  },
];

const tabs = ["All Orders", "In Transit", "Delivered", "Cancelled"];

const OrdersPage = () => {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
          <span>Home</span>
          <span>/</span>
          <span className="text-black">My Orders</span>
        </div>

        <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
          MY ORDERS
        </h1>

        <p className="mt-3 font-roboto text-sm text-gray-500">
          Track and manage all your recent purchases.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex items-center justify-between gap-6">
        <div className="relative w-full max-w-md">
          <SearchIcon
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search order number..."
            className="h-12 w-full rounded-md border border-gray-300 bg-white pl-12 pr-4 font-roboto text-sm outline-none"
          />
        </div>

        <button className="h-12 rounded-md border border-gray-300 px-6 font-roboto text-sm hover:bg-gray-50">
          Filter Orders
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-10 border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`pb-4 font-roboto text-sm uppercase tracking-[0.08em] transition ${
              index === 0
                ? "border-b border-black text-black"
                : "text-gray-400 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orders */}
      <div className="space-y-5">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-md border border-gray-200 bg-white p-6"
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <h2 className="font-roboto text-lg font-bold text-black">
                    Order #{order.id}
                  </h2>

                  <span
                    className={`rounded-full px-4 py-2 font-roboto text-xs ${
                      order.status === "Delivered"
                        ? "bg-gray-100 text-black"
                        : order.status === "Cancelled"
                          ? "bg-red-50 text-red-500"
                          : "bg-black text-white"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <p className="mt-2 font-roboto text-sm text-gray-500">
                  Placed on {order.date}
                </p>
              </div>

              <Link
                href={`/users/orders/${order.id}`}
                className="flex items-center gap-2 font-roboto text-sm text-black"
              >
                View Details
                <ArrowRightIcon size={16} />
              </Link>
            </div>

            {/* Content */}
            <div className="mt-8 grid grid-cols-12 gap-8">
              {/* Product */}
              <div className="col-span-7 flex items-center gap-6">
                <div className="relative h-32 w-32 rounded-md bg-gray-100 overflow-hidden">
                  <Image
                    src={order.image}
                    alt={order.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-roboto text-base font-bold text-black">
                    {order.name}
                  </h3>

                  <div className="mt-3 space-y-2">
                    <p className="font-roboto text-sm text-gray-500">
                      Order ID: #{order.id}
                    </p>

                    <p className="font-roboto text-sm text-gray-500">
                      {order.items} Item(s)
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="col-span-5 grid grid-cols-3 gap-4">
                <div className="rounded-md bg-gray-50 p-5">
                  <p className="font-roboto text-xs uppercase tracking-[0.14em] text-gray-400">
                    Total
                  </p>

                  <h4 className="mt-3 font-roboto text-xl font-bold">
                    {order.total}
                  </h4>
                </div>

                <div className="rounded-md bg-gray-50 p-5">
                  <p className="font-roboto text-xs uppercase tracking-[0.14em] text-gray-400">
                    Status
                  </p>

                  <h4 className="mt-3 font-roboto text-sm font-medium">
                    {order.status}
                  </h4>
                </div>

                <div className="rounded-md bg-gray-50 p-5">
                  <p className="font-roboto text-xs uppercase tracking-[0.14em] text-gray-400">
                    Shipping
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <PackageIcon size={16} />
                    <span className="font-roboto text-sm">UPS Express</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
              <button className="font-roboto text-sm text-gray-500 hover:text-black transition">
                Download Invoice
              </button>

              <div className="flex items-center gap-4">
                <Link
                  href={`/users/track-order/${order.id}`}
                  className="flex h-11 items-center justify-center rounded-md border border-gray-300 px-5 font-roboto text-sm hover:bg-gray-50 transition"
                >
                  Track Order
                </Link>

                <Link
                  href={`/users/orders/${order.id}`}
                  className="flex h-11 items-center justify-center rounded-md bg-black px-6 font-roboto text-sm text-white hover:bg-neutral-800 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersPage;
