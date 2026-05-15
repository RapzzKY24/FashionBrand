import { MinusIcon, PlusIcon } from "lucide-react";

export default function QuantityActions() {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium font-roboto uppercase tracking-[0.08em]">
        Quantity
      </h2>

      <div className="flex items-center gap-5">
        <div className="flex w-40 h-14 bg-white border border-gray-300 rounded-xl overflow-hidden">
          <button className="flex-1 flex items-center justify-center hover:bg-gray-50 transition">
            <MinusIcon size={18} className="text-gray-600" />
          </button>

          <div className="flex-1 flex items-center justify-center font-roboto font-medium">
            1
          </div>

          <button className="flex-1 flex items-center justify-center hover:bg-gray-50 transition">
            <PlusIcon size={18} className="text-gray-600" />
          </button>
        </div>

        <button className="flex-1 h-14 bg-black rounded-xl text-white font-roboto text-sm uppercase tracking-[0.08em] hover:bg-neutral-800 transition">
          Add To Cart
        </button>

        <button className="flex-1 h-14 bg-white border border-black rounded-xl text-black font-roboto text-sm uppercase tracking-[0.08em] hover:bg-gray-100 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
