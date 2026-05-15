import {
  ArrowRightIcon,
  CreditCardIcon,
  HeartIcon,
  MapPinIcon,
  PackageIcon,
  SearchCheckIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    title: "Total Orders",
    value: "12",
    action: "View all orders",
    icon: ShoppingBagIcon,
  },
  {
    title: "In Transit",
    value: "2",
    action: "Track your orders",
    icon: TruckIcon,
  },
  {
    title: "Delivered",
    value: "8",
    action: "View delivered orders",
    icon: PackageIcon,
  },
  {
    title: "Wishlist Items",
    value: "6",
    action: "View your wishlist",
    icon: HeartIcon,
  },
];

const recentOrders = [
  {
    name: "Men BLVCK Grey Hoodie",
    image: "/hoddieCollection/hoddie1.png",
    orderId: "#BLCK78945",
    date: "May 20, 2024",
    status: "In Transit",
    price: "$180.00",
  },
  {
    name: "Hip Hop Street Wear Hoodie",
    image: "/hoddieCollection/hoddie4.png",
    orderId: "#BLCK78812",
    date: "May 15, 2024",
    status: "Delivered",
    price: "$240.00",
  },
  {
    name: "Retro Rapper Tupac Hoodie",
    image: "/hoddieCollection/hoddie2.png",
    orderId: "#BLCK78655",
    date: "May 10, 2024",
    status: "Delivered",
    price: "$100.00",
  },
  {
    name: "LHR London England Hoodie",
    image: "/hoddieCollection/hoddie5.png",
    orderId: "#BLCK78422",
    date: "May 05, 2024",
    status: "Cancelled",
    price: "$250.00",
  },
];

const quickLinks = [
  { title: "My Orders", href: "/users/orders", icon: ShoppingBagIcon },
  { title: "Track Order", href: "/users/track-order", icon: SearchCheckIcon },
  { title: "Addresses", href: "/users/addresses", icon: MapPinIcon },
  {
    title: "Payment Methods",
    href: "/users/payment-methods",
    icon: CreditCardIcon,
  },
];

const UsersOverviewPage = () => {
  return (
    <section className="space-y-8">
      <div>
        <p className="font-roboto text-sm text-black">
          Welcome back, Jason! 👋
        </p>

        <h1 className="mt-2 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
          Overview
        </h1>

        <p className="mt-2 font-roboto text-sm text-gray-500">
          Here&apos;s what&apos;s happening with your account today.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-md border border-gray-200 bg-white p-6"
            >
              <div className="flex items-start gap-8">
                <Icon size={24} />
                <div>
                  <p className="font-roboto text-xs uppercase tracking-[0.18em] text-gray-500">
                    {item.title}
                  </p>
                  <h2 className="mt-2 font-roboto text-3xl font-bold text-black">
                    {item.value}
                  </h2>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-5">
                <button className="flex items-center gap-3 font-roboto text-sm text-black">
                  {item.action}
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7 rounded-md border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Recent Orders
            </h2>

            <Link
              href="/users/orders"
              className="flex items-center gap-2 font-roboto text-sm"
            >
              View All Orders
              <ArrowRightIcon size={16} />
            </Link>
          </div>

          <div className="mt-6 divide-y divide-gray-200">
            {recentOrders.map((order) => (
              <div
                key={order.orderId}
                className="grid grid-cols-12 items-center gap-4 py-4"
              >
                <div className="relative col-span-2 h-20 w-20 rounded-md bg-gray-100">
                  <Image
                    src={order.image}
                    alt={order.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="col-span-5">
                  <h3 className="font-roboto text-sm font-bold">
                    {order.name}
                  </h3>
                  <p className="mt-1 font-roboto text-xs text-gray-500">
                    Order {order.orderId}
                  </p>
                  <p className="mt-1 font-roboto text-xs text-gray-500">
                    {order.date}
                  </p>
                </div>

                <div className="col-span-2">
                  <span className="rounded-full bg-gray-100 px-4 py-2 font-roboto text-xs">
                    {order.status}
                  </span>
                </div>

                <p className="col-span-2 font-roboto text-sm">{order.price}</p>

                <button className="col-span-1 flex justify-end">
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5 space-y-6">
          <div className="rounded-md border border-gray-200 bg-white p-6">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Track Your Order
            </h2>

            <p className="mt-4 max-w-md font-roboto text-sm leading-6 text-gray-500">
              Enter your tracking number to check the latest status of your
              package.
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

          <div className="rounded-md border border-gray-200 bg-white p-6">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Wishlist Summary
            </h2>

            <div className="mt-6 flex items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <HeartIcon size={28} />
              </div>

              <div>
                <p className="font-roboto text-sm">
                  You have 6 items in your wishlist.
                </p>
                <p className="mt-2 font-roboto text-sm text-gray-500">
                  Keep track of your favorite items and shop them before
                  they&apos;re gone.
                </p>

                <Link
                  href="/users/wishlist"
                  className="mt-4 flex items-center gap-2 font-roboto text-sm"
                >
                  View Wishlist
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-gray-200 bg-white p-6">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Account Details
            </h2>

            <div className="mt-6 divide-y divide-gray-200">
              {[
                ["Name", "Jason Dev."],
                ["Email", "jasondev@example.com"],
                ["Phone", "+1 (555) 123-4567"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-4 font-roboto text-sm"
                >
                  <span className="text-gray-500">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>

            <Link
              href="/users/account-details"
              className="mt-4 flex items-center gap-2 font-roboto text-sm"
            >
              Manage Account
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-md border border-gray-200 bg-white p-6">
        <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
          Quick Links
        </h2>

        <div className="mt-6 grid grid-cols-4 gap-4">
          {quickLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="flex h-24 flex-col items-center justify-center gap-3 rounded-md border border-gray-200 font-roboto text-sm hover:bg-gray-50"
              >
                <Icon size={22} />
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UsersOverviewPage;
