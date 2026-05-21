import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { ProductItem } from "@/src/features/product/services/product";

type FeaturedProductsProps = {
  products: ProductItem[];
};

export const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
          You Might Also Like
        </h2>

        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
          <ArrowRightIcon size={16} />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-5 gap-4">
        {products.slice(0, 5).map((product) => (
          <div
            key={product.id}
            className="relative h-44 rounded-md bg-gray-100 overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
