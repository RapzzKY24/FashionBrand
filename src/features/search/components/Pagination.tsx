"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useSearch } from "@/src/features/search/hooks/use-search";

const Pagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const { setPage } = useSearch();

  if (totalPages <= 1) return null;

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p > 1 ? String(p) : null);
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="flex items-center gap-1 px-4 py-2 font-roboto text-sm border border-gray-300 rounded-md disabled:opacity-30 disabled:cursor-not-allowed hover:border-black transition"
      >
        <ChevronLeftIcon size={16} />
        Previous
      </button>

      <span className="font-roboto text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="flex items-center gap-1 px-4 py-2 font-roboto text-sm border border-gray-300 rounded-md disabled:opacity-30 disabled:cursor-not-allowed hover:border-black transition"
      >
        Next
        <ChevronRightIcon size={16} />
      </button>
    </div>
  );
};

export default Pagination;