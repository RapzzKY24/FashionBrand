"use client";

import { SearchIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const popularSearches = ["Hoodie", "T-Shirt", "Jacket", "Collections"];

const trendingProducts = [
  {
    id: 1,
    name: "Men BLVCK Grey Hoodie",
    price: "$180",
    image: "/hoddieCollection/hoddie1.png",
  },
  {
    id: 2,
    name: "Hip Hop Street Wear Hoodie",
    price: "$120",
    image: "/hoddieCollection/hoddie4.png",
  },
  {
    id: 3,
    name: "LHR London England Hoodie",
    price: "$250",
    image: "/hoddieCollection/hoddie5.png",
  },
];

const SearchModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  if (!open) return null;

  const handleSearch = (term: string) => {
    const q = term.trim();
    if (!q) return;
    onClose();
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(query);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-start justify-center bg-black/40 px-6 pt-32 backdrop-blur-sm">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-10 shadow-2xl">
        <div className="flex items-center justify-between">
          <h1 className="font-barlow text-4xl font-extrabold uppercase tracking-[0.04em]">
            What are you looking for?
          </h1>

          <button onClick={onClose} className="hover:opacity-60">
            <XIcon size={26} />
          </button>
        </div>

        <div className="relative mt-8">
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search products, collections..."
            className="h-14 w-full rounded-md border border-gray-300 px-5 pr-14 font-roboto text-sm outline-none"
          />

          <button
            onClick={() => handleSearch(query)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition"
          >
            <SearchIcon size={20} />
          </button>
        </div>

        <div className="mt-8">
          <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
            Popular Searches
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {popularSearches.map((item) => (
              <button
                key={item}
                onClick={() => handleSearch(item)}
                className="rounded-full border border-gray-300 px-5 py-2 font-roboto text-sm hover:border-black hover:bg-black hover:text-white transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
            Trending Products
          </h2>

          <div className="mt-5 grid grid-cols-3 gap-5">
            {trendingProducts.map((product) => (
              <Link
                href={`/shop/${product.id}`}
                key={product.id}
                onClick={onClose}
                className="group rounded-md border border-gray-200 bg-white overflow-hidden"
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition group-hover:scale-105"
                  />
                </div>

                <div className="flex items-start justify-between p-4">
                  <h3 className="font-roboto text-sm font-bold">
                    {product.name}
                  </h3>

                  <p className="font-roboto text-sm font-bold">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
