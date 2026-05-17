import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { ProductCard } from "@/src/components/ProductCard";
import { StaticImageData } from "next/image";

type Product = {
  id: string;
  image: StaticImageData | string;
  name: string;
  category: string;
  price: number;
};

export type Props = {
  products: Product[];
};

export default function RelatedProducts({ products }: Props) {
  return (
    <>
      {products?.length > 0 && (
        <>
          <div className="flex items-center justify-between pt-8">
            <h1 className="uppercase font-bold font-roboto text-[16px] tracking-[0.08em]">
              You May Also Like
            </h1>

            <div className="flex items-center gap-2">
              <Link
                className="uppercase font-bold font-roboto text-[16px] tracking-[0.08em]"
                href="/shop"
              >
                View All
              </Link>
              <ArrowRightIcon size={18} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {products?.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
