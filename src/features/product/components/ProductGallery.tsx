import Image, { StaticImageData } from "next/image";
import { ArrowDown, ArrowUp } from "lucide-react";

type Props = {
  image: StaticImageData | string;
  title: string;
};

export default function ProductGallery({ image, title }: Props) {
  return (
    <>
      <aside className="col-span-1 flex flex-col gap-y-4">
        {[1, 2, 3, 4].map((item) => (
          <button
            key={item}
            className={`w-28 h-28 bg-neutral-100 rounded-xl border transition overflow-hidden ${
              item === 1
                ? "border-black"
                : "border-transparent hover:border-black/20"
            }`}
          >
            {item === 1 && (
              <Image
                src={image}
                alt="thumbnail"
                width={112}
                height={112}
                className="w-full h-full object-contain"
              />
            )}
          </button>
        ))}

        <div className="flex w-28 h-11 bg-white border border-gray-300 rounded-xl overflow-hidden">
          <button className="flex-1 flex items-center justify-center hover:bg-gray-50 transition">
            <ArrowUp size={18} className="text-gray-600" />
          </button>
          <div className="w-px h-full bg-gray-300" />
          <button className="flex-1 flex items-center justify-center hover:bg-gray-50 transition">
            <ArrowDown size={18} className="text-gray-600" />
          </button>
        </div>
      </aside>

      <div className="col-span-6 h-[680px] bg-neutral-100 rounded-2xl relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          priority
        />
      </div>
    </>
  );
}
