import Link from "next/link";

export const CollectionsHero = () => {
  return (
    <div className="grid grid-cols-12 items-center bg-linear-to-r from-white via-neutral-50 to-white px-16">
      <div className="col-span-6 py-6">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 font-roboto text-sm uppercase tracking-[0.08em] text-gray-400">
            <Link href="/home" className="transition hover:text-black">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-black">SHOP</span>
          </div>

          <h1 className="font-barlow text-6xl font-extrabold uppercase tracking-[0.08rem] text-black">
            Collections
          </h1>

          <p className="max-w-md font-roboto text-base font-light leading-7 text-gray-400">
            Curated collections, designed with purpose
          </p>
        </div>
      </div>
    </div>
  );
};
