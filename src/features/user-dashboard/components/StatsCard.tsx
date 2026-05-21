import { ArrowRightIcon } from "lucide-react";
import { StatCardDef } from "../types/dashboard.types";
import Link from "next/link";

type StatsCardProps = {
  item: StatCardDef;
};

export const StatsCard = ({ item }: StatsCardProps) => {
  const Icon = item.icon;

  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <div className="flex items-start gap-8">
        <Icon size={24} />
        <div>
          <p className="font-roboto text-xs uppercase tracking-[0.18em] text-gray-500">
            {item.title}
          </p>
          <h2 className="mt-2 font-roboto text-3xl font-bold text-black">
            {item.value}
          </h2>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-5">
        <Link href={item.href}>
          <button className="flex items-center gap-3 font-roboto text-sm text-black cursor-pointer">
            {item.action}
            <ArrowRightIcon size={16} />
          </button>
        </Link>
      </div>
    </div>
  );
};
