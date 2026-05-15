import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { EyeIcon } from "lucide-react";

type ProductCardProps = {
  id: number;
  image: string | StaticImageData;
  title: string;
  price: string;
};

export const ProductCard = ({ id, image, title, price }: ProductCardProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-4">
      <div className="group relative bg-gray-100 w-full h-[550px] px-6 py-8 overflow-hidden rounded-md">
        {/* Eye Button */}
        <Link
          href={`/shop/${id}`}
          className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
        >
          <EyeIcon size={18} className="text-black" />
        </Link>

        {/* Image */}
        <Image
          src={image}
          alt={title}
          width={700}
          height={800}
          className="object-contain absolute bottom-0 left-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300" />

        {/* Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button className="bg-transparent text-white outline outline-white px-4 py-3 rounded-sm min-w-[140px] hover:bg-white hover:text-black transition">
            <h1 className="text-center font-roboto text-[16px]">Add To Cart</h1>
          </button>

          <button className="bg-white text-black px-4 py-3 rounded-sm min-w-[140px] hover:bg-black hover:text-white transition">
            <h1 className="text-center font-roboto text-[16px]">Buy Now</h1>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-2">
        <h1 className="font-roboto font-semibold text-[16px]">{title}</h1>

        <h1 className="font-roboto font-semibold text-[16px]">{price}</h1>
      </div>
    </div>
  );
};
