import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: {
    title: string;
    items: string;
    image: string;
  };
};

export const TopCategoryCard = ({ item }: Props) => {
  return (
    <Link
      href="/shop"
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
  );
};
