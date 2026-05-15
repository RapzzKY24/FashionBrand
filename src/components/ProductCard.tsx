import Image, { StaticImageData } from "next/image";

type ProductCardProps = {
  image: string | StaticImageData;
  title: string;
  price: string;
};

export const ProductCard = ({ image, title, price }: ProductCardProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-4">
      <div className="group relative bg-gray-100 w-full h-[550px] px-6 py-8 overflow-hidden rounded-md">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          width={700}
          height={800}
          className="object-contain absolute bottom-0 left-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        {/* Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button className="bg-transparent text-white outline outline-white px-4 py-3 rounded-sm min-w-[140px]">
            <h1 className="text-center font-roboto text-[16px] ">
              Add To Cart
            </h1>
          </button>

          <button className="bg-white text-black px-4 py-3 rounded-sm min-w-[140px]">
            <h1 className="text-center font-roboto text-[16px] ">Buy Now</h1>
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
