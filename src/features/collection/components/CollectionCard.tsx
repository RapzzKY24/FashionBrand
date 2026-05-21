import Image from "next/image";
import Link from "next/link";

type Props = {
  item: {
    title: string;
    desc: string;
    items: string;
    image: string;
  };
};

export const CollectionCard = ({ item }: Props) => {
  return (
    <Link
      href="/shop"
      className="group overflow-hidden rounded-md border border-gray-200 bg-white"
    >
      <div className="relative h-[450px] overflow-hidden bg-neutral-100 sm:h-[600px] lg:h-[750px]">
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
          <p className="mt-2 font-roboto text-sm text-gray-500">{item.desc}</p>
        </div>

        <p className="font-roboto text-sm font-medium">{item.items}</p>
      </div>
    </Link>
  );
};
