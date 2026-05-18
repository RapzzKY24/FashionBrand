import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { EyeIcon } from "lucide-react";
import { formatRupiah } from "../utils/formatCurrency";

export type ProductCardProps = {
  id: string;
  image: string | StaticImageData;
  name: string;
  price: number;
  stock_status: string;
};

export const ProductCard = ({
  id,
  image,
  name,
  price,
  stock_status,
}: ProductCardProps) => {
  const isOutOfStock = stock_status === "out_of_stock";

  return (
    <div
      className={`flex flex-col justify-center gap-y-4 transition ${
        isOutOfStock ? "opacity-60" : ""
      }`}
    >
      <div className="group relative h-[550px] w-full overflow-hidden rounded-md bg-gray-100 px-6 py-8">
        {/* SOLD OUT */}
        {isOutOfStock && (
          <div className="absolute left-5 top-5 z-30 rounded-full bg-black px-4 py-1.5">
            <p className="font-roboto text-[10px] uppercase tracking-[0.15em] text-white">
              Sold Out
            </p>
          </div>
        )}

        {/* Eye Button */}
        <Link
          href={`/shop/${id}`}
          className={`absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-md transition-all duration-300 ${
            isOutOfStock
              ? "cursor-not-allowed opacity-50"
              : "opacity-0 hover:scale-105 group-hover:opacity-100"
          }`}
        >
          <EyeIcon size={18} className="text-black" />
        </Link>

        {/* Image */}
        <Image
          src={image}
          alt="product"
          width={700}
          height={800}
          className={`absolute bottom-0 left-0 h-full w-full object-contain transition-transform duration-500 ${
            isOutOfStock ? "grayscale" : "group-hover:scale-105"
          }`}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isOutOfStock
              ? "bg-black/20"
              : "bg-black/30 opacity-0 group-hover:opacity-100"
          }`}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-2">
        <h1 className="font-roboto text-[16px] font-semibold">{name}</h1>

        <h1 className="font-roboto text-[16px] font-semibold">
          {formatRupiah(price)}
        </h1>
      </div>
    </div>
  );
};
