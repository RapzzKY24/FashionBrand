"use client";
import { SearchIcon } from "lucide-react";

type OrderFiltersProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export const OrderFilters = ({ searchQuery, onSearchChange }: OrderFiltersProps) => {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="relative w-full max-w-md">
        <SearchIcon
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search order number..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-12 w-full rounded-md border border-gray-300 bg-white pl-12 pr-4 font-roboto text-sm outline-none"
        />
      </div>
      <button className="h-12 rounded-md border border-gray-300 px-6 font-roboto text-sm hover:bg-gray-50">
        Filter Orders
      </button>
    </div>
  );
};
