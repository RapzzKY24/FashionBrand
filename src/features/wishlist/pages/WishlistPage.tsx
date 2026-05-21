import {
  ArrowRightIcon,
  Grid2X2Icon,
  HeartIcon,
  LayoutListIcon,
  ShoppingBagIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { WishlistService } from "../services/wishlist";
import { formatRupiah } from "@/src/utils/formatCurrency";

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function WishlistPage() {
  const token = (await cookies()).get("token")?.value;
  const items = token ? await WishlistService.getAll(token) : [];

  return (
    <section className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
          <Link href="/users">Home</Link>
          <span>/</span>
          <span className="text-black">Wishlist</span>
        </div>

        <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
          MY WISHLIST
        </h1>

        <p className="mt-3 font-roboto text-sm text-gray-500">
          Items you love. Keep track of your favorites.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex h-16 items-center justify-between rounded-md border border-gray-200 bg-white px-6">
        <p className="font-roboto text-sm font-bold uppercase tracking-[0.12em]">
          {items.length} Items
        </p>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <span className="font-roboto text-sm uppercase tracking-[0.12em] text-gray-500">
              Sort By:
            </span>

            <select className="bg-transparent font-roboto text-sm outline-none">
              <option>Recently Added</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
              <option>Name A - Z</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-md bg-black text-white">
              <Grid2X2Icon size={18} />
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-black hover:bg-gray-50">
              <LayoutListIcon size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-md border border-gray-200 bg-white"
          >
            <div className="relative h-[320px] bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />

              <button className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-gray-100">
                <XIcon size={17} />
              </button>

              <button className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white hover:bg-neutral-800">
                <ShoppingBagIcon size={18} />
              </button>
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-roboto text-sm font-bold text-black">
                  {item.name}
                </h2>

                <p className="font-roboto text-sm font-bold text-black">
                  {formatRupiah(item.price)}
                </p>
              </div>

              <p className="mt-3 font-roboto text-sm text-gray-500">
                Size: M
                <span className="mx-2">&bull;</span>
                Color: Black
              </p>

              <p className="mt-3 font-roboto text-sm text-gray-500">
                Added on {formatDate(item.created_at)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-6 py-5">
        <div className="flex items-center gap-5">
          <HeartIcon size={28} />

          <div>
            <h2 className="font-roboto text-sm font-bold">
              Don&apos;t see something you love?
            </h2>

            <p className="mt-1 font-roboto text-sm text-gray-500">
              Explore our latest collection and find more styles you&apos;ll
              love.
            </p>
          </div>
        </div>

        <Link
          href="/shop"
          className="flex h-12 items-center gap-3 rounded-md bg-black px-7 font-roboto text-sm uppercase tracking-[0.12em] text-white hover:bg-neutral-800"
        >
          Shop Now
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </section>
  );
}
