import { ProductCard } from "@/src/components/ProductCard";
import FilterPanelProduct from "../../product/components/FilterPanelProduct";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import { ProductGrid, ProductGridItem } from "@/src/animations";
import { ProductService } from "../../product/services/product";

const SearchProductPage = async ({
  q,
  category,
  sort,
  page,
}: {
  q?: string;
  category?: string;
  sort?: string;
  page?: string;
}) => {
  const products = await ProductService.getAllProduct({
    search: q,
    category,
    sort,
    page: page ? Number(page) : undefined,
  });

  return (
    <div className="px-16 py-6 overflow-hidden w-full pt-26 flex flex-col gap-y-4 justify-center pb-40">
      <Header query={q} totalItems={products.total_items} />
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 h-fit">
          <FilterPanelProduct />
        </div>
        <ProductGrid key={products.data.map(p => p.id).join(',')} className="col-span-3 grid grid-cols-3 gap-4">
          {products?.data.length === 0 ? (
            <div className="col-span-3 flex flex-col items-center justify-center py-20 text-gray-400">
              <p className="font-roboto text-lg">No products found</p>
              {q && (
                <p className="font-roboto text-sm mt-1">
                  No results for &quot;{q}&quot;
                </p>
              )}
            </div>
          ) : (
            products?.data.map((item) => (
              <ProductGridItem key={item.id}>
                <ProductCard
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  stock_status={item.stock_status}
                />
              </ProductGridItem>
            ))
          )}
        </ProductGrid>
      </div>

      <Pagination
        currentPage={products.page ?? 1}
        totalPages={products.total_pages ?? 1}
      />
    </div>
  );
};

export default SearchProductPage;
