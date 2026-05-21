import { CheckIcon, MinusIcon } from "lucide-react";

type FilterItem = {
  name: string;
  count?: string;
  active: boolean;
};

type Props = {
  title: string;
  type: "checkbox" | "radio";
  items: FilterItem[];
};

export const FilterGroup = ({ title, type, items }: Props) => {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-roboto text-xs font-bold uppercase tracking-[0.12em]">
          {title}
        </h3>
        <MinusIcon size={16} />
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <button
            key={item.name}
            className="flex items-center gap-3 font-roboto text-sm"
          >
            <span
              className={`flex h-4 w-4 items-center justify-center border ${
                type === "radio" ? "rounded-full" : "rounded-sm"
              } ${
                item.active
                  ? type === "checkbox"
                    ? "border-black bg-black text-white"
                    : "border-black"
                  : "border-gray-300"
              }`}
            >
              {item.active && type === "checkbox" && <CheckIcon size={12} />}
              {item.active && type === "radio" && (
                <span className="h-2 w-2 rounded-full bg-black" />
              )}
            </span>

            <span>{item.name}</span>

            {item.count && (
              <span className="text-gray-400">({item.count})</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
