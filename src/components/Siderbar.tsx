"use client";

import {
  CreditCardIcon,
  HeartIcon,
  HomeIcon,
  LogOutIcon,
  MapPinIcon,
  PackageIcon,
  SearchCheckIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { title: "Overview", href: "/users", icon: HomeIcon },
  { title: "My Orders", href: "/users/orders", icon: PackageIcon },
  {
    title: "Track Order",
    href: "/users/track-order",
    icon: SearchCheckIcon,
  },
  { title: "Wishlist", href: "/users/wishlist", icon: HeartIcon },
  { title: "Addresses", href: "/users/addresses", icon: MapPinIcon },
  {
    title: "Payment Methods",
    href: "/users/payment-methods",
    icon: CreditCardIcon,
  },
  { title: "Account Details", href: "/users/account-details", icon: UserIcon },
];

const UserSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] border-r border-gray-200 bg-white px-8 py-10">
      <div className="flex flex-col items-center text-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gray-100">
          <Image
            src="/hoddieCollection/hoddie4.png"
            alt="user"
            fill
            className="object-cover"
          />
        </div>

        <h1 className="mt-5 font-roboto text-xl font-bold text-black">
          Jason Dev.
        </h1>
        <p className="mt-1 font-roboto text-sm text-gray-500">
          jasondev@example.com
        </p>
      </div>

      <nav className="mt-10 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-md px-5 py-4 font-roboto text-sm transition ${
                active
                  ? "bg-gray-100 text-black"
                  : "text-black hover:bg-gray-50"
              }`}
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </Link>
          );
        })}

        <button className="flex w-full items-center gap-4 rounded-md px-5 py-4 font-roboto text-sm text-black hover:bg-gray-50">
          <LogOutIcon size={18} />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default UserSidebar;
