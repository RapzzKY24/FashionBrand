import FilterPanelProduct from "@/src/features/product/components/FilterPanelProduct";
import Header from "@/src/features/product/components/Header";
import { ProductCard } from "@/src/components/ProductCard";
import { ProductService } from "@/src/features/product/services/product";

const ProductPages = async () => {
  const products = await ProductService.getAllProduct();
  return (
    <section className="px-16 py-6 overflow-hidden w-full pt-26 flex flex-col gap-y-4 justify-center pb-20">
      <Header />
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 h-fit">
          <FilterPanelProduct />
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-4 ">
          {products?.data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              stock_status={item.stock_status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPages;
