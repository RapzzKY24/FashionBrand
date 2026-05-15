"use client";

import { SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    title: "Home",
    links: "/home",
  },
  {
    title: "Shop",
    links: "/shop",
  },
  {
    title: "New Arrival",
    links: "/newarrival",
  },
  {
    title: "Collections",
    links: "/collections",
  },
  {
    title: "About Us",
    links: "/aboutUs",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/20">
      <nav className="flex items-center justify-between px-16 py-8">
        {/* nav items */}
        <div className="flex items-center gap-14">
          {NAV_ITEMS.map((item, i) => {
            const isActive = pathname === item.links;

            return (
              <Link href={item.links} key={i} className="relative group">
                <h1
                  className={`font-roboto text-[16px] uppercase transition-all duration-300 ${
                    isActive ? "text-black font-semibold" : "text-gray-500"
                  }`}
                >
                  {item.title}
                </h1>

                {/* underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-black transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* logo */}
        <h1 className="text-4xl font-barlow font-bold uppercase">reflect</h1>

        {/* icons */}
        <div className="flex items-center gap-4">
          <SearchIcon size={26} />
          <UserIcon size={26} />

          <span className="relative">
            <div className="bg-red-600 rounded-full w-4 h-4 absolute -top-1 -right-1.5 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white leading-none">
                1
              </span>
            </div>

            <ShoppingCartIcon size={26} />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
