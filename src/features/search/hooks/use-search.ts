"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQueryState } from "nuqs";

export function useSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (term: string) => {
    const q = term.trim();
    if (!q) return false;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    return true;
  };

  const [category, setCategory] = useQueryState("category");
  const [sort, setSort] = useQueryState("sort", { defaultValue: "newest" });
  const [page, setPage] = useQueryState("page");

  const resetFilters = () => {
    setCategory(null);
    setSort(null);
    setPage(null);
  };

  return {
    query,
    setQuery,
    handleSearch,
    category,
    setCategory,
    sort,
    setSort,
    page,
    setPage,
    resetFilters,
  };
}
