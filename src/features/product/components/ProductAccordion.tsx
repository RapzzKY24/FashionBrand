import { PlusIcon } from "lucide-react";

export default function ProductAccordion() {
  const items = ["Description", "Material & Care", "Shipping & Returns"];

  return (
    <div className="pt-2 border-t border-gray-300">
      {items.map((item) => (
        <button
          key={item}
          className="w-full py-5 border-b border-gray-300 flex items-center justify-between group"
        >
          <span className="uppercase text-sm font-roboto font-medium text-gray-500 group-hover:text-black transition">
            {item}
          </span>
          <PlusIcon size={18} className="text-gray-500" />
        </button>
      ))}
    </div>
  );
}
