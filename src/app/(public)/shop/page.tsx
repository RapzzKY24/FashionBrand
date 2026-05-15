import FilterPanelProduct from "@/src/pages/shop/components/FilterPanelProduct";
import Header from "@/src/pages/shop/components/Header";
import { ProductCard } from "@/src/components/ProductCard";
import { products } from "@/src/data/Product";

const ShopPages = () => {
  return (
    <section className="px-16 py-6 overflow-hidden w-full pt-26 flex flex-col gap-y-4 justify-center pb-20">
      <Header />
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 h-fit">
          <FilterPanelProduct />
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-4 ">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPages;
