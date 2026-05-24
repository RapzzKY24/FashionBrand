"use client";

import {
  HeartIcon,
  HomeIcon,
  LogOutIcon,
  PackageIcon,
  SearchCheckIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "../features/auth/actions/authAction";

type UserSidebarProps = {
  name: string;
  email: string;
  avatar?: string | null;
};

const menuItems = [
  { title: "Overview", href: "/users", icon: HomeIcon },
  { title: "My Orders", href: "/users/orders", icon: PackageIcon },
  {
    title: "Track Order",
    href: "/users/track-order",
    icon: SearchCheckIcon,
  },
  { title: "Wishlist", href: "/users/wishlist", icon: HeartIcon },
  { title: "Account Details", href: "/users/account-details", icon: UserIcon },
];

const UserSidebar = ({ name, email, avatar }: UserSidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] border-r border-gray-200 bg-white px-8 py-10">
      <div className="flex flex-col items-center text-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gray-100">
          {avatar ? (
            <Image src={avatar} alt="user" fill className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-roboto text-3xl font-bold text-gray-400">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <h1 className="mt-5 font-roboto text-xl font-bold text-black">
          {name}
        </h1>
        <p className="mt-1 font-roboto text-sm text-gray-500">{email}</p>
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
        <form action={logoutAction}>
          <button
            className="flex w-full items-center gap-4 rounded-md px-5 py-4 font-roboto text-sm text-black hover:bg-gray-50"
            type="submit"
          >
            <LogOutIcon size={18} />
            <span>Logout</span>
          </button>
        </form>
      </nav>
    </aside>
  );
};

export default UserSidebar;
