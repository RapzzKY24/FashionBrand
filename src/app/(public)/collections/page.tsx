import {
  ArrowRightIcon,
  CheckIcon,
  Grid2X2Icon,
  LayoutListIcon,
  MinusIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const topCategories = [
  {
    title: "Hoodies",
    items: "24 Items",
    image: "/hoddieCollection/hoddie1.png",
  },
  {
    title: "T-Shirts",
    items: "18 Items",
    image: "/T-shirt/tshirt1.png",
  },
  {
    title: "Jackets",
    items: "15 Items",
    image: "/outerwear/outerwear1.png",
  },
  {
    title: "Sweatpants",
    items: "12 Items",
    image: "/hoddieCollection/product2.png",
  },
  {
    title: "Accessories",
    items: "20 Items",
    image: "/hoddieCollection/product3.png",
  },
];

const collections = [
  {
    title: "Core Essentials",
    desc: "Timeless staples for everyday wear.",
    items: "24 Items",
    image: "/collections/collection.png",
  },
  {
    title: "Urban Minimal",
    desc: "Clean lines. Minimal impact.",
    items: "18 Items",
    image: "/collections/collection2.png",
  },
  {
    title: "Outerwear",
    desc: "Layer up in style.",
    items: "15 Items",
    image: "/outerwear/outerwear1.png",
  },
  {
    title: "Comfort Club",
    desc: "Built for movement. Made for comfort.",
    items: "12 Items",
    image: "/collections/collection3.png",
  },
  {
    title: "Accessories",
    desc: "The details that complete the look.",
    items: "20 Items",
    image: "/collections/collection5.png",
  },
  {
    title: "Limited Editions",
    desc: "Exclusive drops. Limited stock.",
    items: "10 Items",
    image: "/collections/collection4.png",
  },
];

const filters = [
  ["All Categories", "24", true],
  ["Hoodies", "24", false],
  ["T-Shirts", "18", false],
  ["Jackets", "15", false],
  ["Sweatpants", "12", false],
  ["Accessories", "20", false],
];

const sortBy = [
  ["Featured", true],
  ["Newest First", false],
  ["Price: Low to High", false],
  ["Price: High to Low", false],
  ["Best Selling", false],
];

const CollectionsPage = () => {
  return (
    <section className="min-h-screen bg-white pt-24 pb-10">
      {/* Hero */}
      <div className="grid grid-cols-12 items-center bg-linear-to-r from-white via-neutral-50 to-white px-16">
        <div className="col-span-6 py-6">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-sm font-roboto text-gray-400 uppercase tracking-[0.08em]">
              <Link href="/home" className="hover:text-black transition">
                Home
              </Link>
              <span>/</span>
              <span className="text-black font-medium">SHOP</span>
            </div>
            <h1 className="text-6xl font-barlow font-extrabold text-black uppercase tracking-[0.08rem]">
              Collections
            </h1>
            <p className="max-w-md font-roboto text-base font-light leading-7 text-gray-400">
              Curated collections, designed with purpose
            </p>
          </div>
        </div>
      </div>

      {/* Top category cards */}
      <div className="grid grid-cols-5 gap-3 px-16 py-5">
        {topCategories.map((item) => (
          <Link
            href="/shop"
            key={item.title}
            className="group relative h-28 overflow-hidden rounded-md bg-neutral-200"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover grayscale transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white">
              <h2 className="font-barlow text-3xl font-extrabold uppercase">
                {item.title}
              </h2>
              <p className="mt-1 font-roboto text-xs uppercase">{item.items}</p>
            </div>

            <div className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black">
              <ArrowRightIcon size={16} />
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-12 border-t border-gray-200">
        {/* Sidebar */}
        <aside className="col-span-2 border-r border-gray-200 px-16 py-8">
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.12em]">
                  Filters
                </h2>
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-roboto text-xs font-bold uppercase tracking-[0.12em]">
                  Category
                </h3>
                <MinusIcon size={16} />
              </div>

              <div className="space-y-4">
                {filters.map(([name, count, active]) => (
                  <button
                    key={name as string}
                    className="flex items-center gap-3 font-roboto text-sm"
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-sm border ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {active && <CheckIcon size={12} />}
                    </span>
                    <span>{name}</span>
                    <span className="text-gray-400">({count})</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-roboto text-xs font-bold uppercase tracking-[0.12em]">
                  Sort By
                </h3>
                <MinusIcon size={16} />
              </div>

              <div className="space-y-4">
                {sortBy.map(([name, active]) => (
                  <button
                    key={name as string}
                    className="flex items-center gap-3 font-roboto text-sm"
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                        active ? "border-black" : "border-gray-300"
                      }`}
                    >
                      {active && (
                        <span className="h-2 w-2 rounded-full bg-black" />
                      )}
                    </span>
                    <span>{name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="col-span-10 px-10 py-8">
          <div className="mb-7 flex items-center justify-between">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.12em]">
              6 Collections
            </h2>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <span className="font-roboto text-xs font-bold uppercase">
                  Sort By:
                </span>

                <select className="bg-transparent font-roboto text-sm outline-none">
                  <option>Featured</option>
                  <option>Newest First</option>
                  <option>Best Selling</option>
                </select>
              </div>

              <button className="flex h-10 w-10 items-center justify-center rounded-md bg-black text-white">
                <Grid2X2Icon size={18} />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300">
                <LayoutListIcon size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {collections.map((item) => (
              <Link
                href="/shop"
                key={item.title}
                className="group overflow-hidden rounded-md border border-gray-200 bg-white"
              >
                <div className="relative h-[450px] sm:h-[600px] lg:h-[750px] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </div>

                <div className="flex items-start justify-between p-5">
                  <div>
                    <h3 className="font-roboto text-base font-bold uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-roboto text-sm text-gray-500">
                      {item.desc}
                    </p>
                  </div>

                  <p className="font-roboto text-sm font-medium">
                    {item.items}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default CollectionsPage;
