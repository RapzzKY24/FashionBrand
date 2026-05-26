import SearchProductPage from "@/src/features/search/pages/SearchProductPage";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; sort?: string; page?: string }>;
}) {
  const { q, category, sort, page } = await searchParams;
  return <SearchProductPage q={q} category={category} sort={sort} page={page} />;
}