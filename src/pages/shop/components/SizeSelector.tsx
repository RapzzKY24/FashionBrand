import { RulerIcon } from "lucide-react";

export default function SizeSelector() {
  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium font-roboto uppercase tracking-[0.08em]">
        Size : M
      </h2>

      <div className="flex items-center gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            className={`w-14 h-14 font-roboto font-semibold text-sm transition ${
              size === "M"
                ? "bg-black text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-2 group">
        <RulerIcon size={18} />
        <span className="text-sm font-medium font-roboto text-black uppercase group-hover:underline">
          Size Guide
        </span>
      </button>
    </div>
  );
}
