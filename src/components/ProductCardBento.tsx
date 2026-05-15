import Image from "next/image";
import React from "react";

type ProductCardBentoProps = {
  images: string;
  category: string;
  heading: string;
};

type ProductCardBentoHorizontalProps = {
  images: string;
};

const ProductCardBento = ({
  images,
  category,
  heading,
}: ProductCardBentoProps) => {
  return (
    <div className="relative px-8 py-10 max-w-3xl h-[295px] bg-gray-100 rounded-2xl overflow-hidden">
      <div className="relative z-10 flex flex-col justify-center space-y-10">
        <h1 className="font-roboto text-sm font-light">{category}</h1>

        <div className="space-y-8 max-w-sm">
          <p className="text-3xl font-roboto font-medium">{heading}</p>

          <button className="bg-white outline outline-black rounded-md px-4 py-3 w-[130px]">
            <span className="text-center text-black font-roboto">
              Check Now
            </span>
          </button>
        </div>
      </div>

      <Image
        src={images}
        alt="product"
        width={390}
        height={400}
        className="absolute right-4 bottom-0 object-contain"
      />
    </div>
  );
};

export const ProductCardBentoHorizontal = ({
  images,
}: ProductCardBentoHorizontalProps) => {
  return (
    <div className="relative px-4 py-6 w-full h-[600px] bg-gray-100 rounded-2xl overflow-hidden">
      <Image
        src={images}
        alt="product"
        height={420}
        width={420}
        className="absolute object-center bottom-0 left-14 mx-auto"
      />
      <div className="relative">
        <button className="bg-white rounded-md px-4 py-3 w-[150px] absolute top-110 left-42">
          <span className="text-center text-black font-roboto font-bold">
            Explore Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCardBento;
