"use client";

import { useEffect, useState } from "react";
import {
  LogInIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchModal from "./SearchModal";
import { useCartStore } from "../features/product/store/store";

type Props = {
  isLoggedIn: boolean;
  userRole?: string;
};

const NAV_ITEMS = [
  { title: "Home", links: "/home" },
  { title: "Shop", links: "/shop" },
  { title: "Collections", links: "/collections" },
];

const NavbarClient = ({ isLoggedIn, userRole }: Props) => {
  const totalItems = useCartStore((state) => state.totalItems);
  const fetchCart = useCartStore((state) => state.fetchCart);
  useEffect(() => {
    if (isLoggedIn) {
      fetchCart();
    }
  }, [isLoggedIn, fetchCart]);
  const pathname = usePathname();
  const [openSearch, setOpenSearch] = useState(false);

  const userHref = userRole === "admin" ? "/admin" : "/users";

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-white/60 backdrop-blur-xl">
        <nav className="flex items-center justify-between px-16 py-8">
          <div className="flex items-center gap-14">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.links;

              return (
                <Link
                  href={item.links}
                  key={item.links}
                  className="group relative"
                >
                  <h1
                    className={`font-roboto text-[16px] uppercase transition-all duration-300 ${
                      isActive ? "font-semibold text-black" : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </h1>

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-black transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <Link href="/home">
            <h1 className="font-barlow text-4xl font-bold uppercase">
              reflect
            </h1>
          </Link>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setOpenSearch(true)}
              className="transition hover:opacity-70"
            >
              <SearchIcon size={24} />
            </button>

            {isLoggedIn ? (
              <Link href={userHref} className="transition hover:opacity-70">
                <UserIcon size={24} />
              </Link>
            ) : (
              <Link href="/auth/login" className="transition hover:opacity-70">
                <LogInIcon size={24} />
              </Link>
            )}

            <span className="relative">
              {totalItems > 0 && (
                <div className="absolute -right-1.5 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600">
                  <span className="text-[10px] font-bold leading-none text-white">
                    {totalItems}
                  </span>
                </div>
              )}

              <Link href="/cart">
                <ShoppingCartIcon
                  size={24}
                  className="cursor-pointer transition hover:opacity-70"
                />
              </Link>
            </span>
          </div>
        </nav>
      </header>

      <SearchModal open={openSearch} onClose={() => setOpenSearch(false)} />
    </>
  );
};

export default NavbarClient;
