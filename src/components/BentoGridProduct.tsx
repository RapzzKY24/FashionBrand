import ProductCardBento, {
  ProductCardBentoHorizontal,
} from "./ProductCardBento";

export const productBentoData = [
  {
    id: 1,
    images: "/productCollection/womenCollection.png",
    category: "Women Collection",
    heading: "Stylish Winter T-Shirt For Women",
  },
  {
    id: 2,
    images: "/productCollection/manCollection.png",
    category: "Men Collection",
    heading: "Premium Casual Outfit For Men",
  },
];

const ProductCardBentoHorizontalData = [
  {
    id: 1,
    images: "/productCollection/fashion1.png",
  },
  {
    id: 2,
    images: "/productCollection/fashion2.png",
  },
];

const BentoGridProduct = () => {
  return (
    <section className="grid grid-cols-10 gap-4">
      <div className="col-span-6">
        <div className="flex gap-4">
          {ProductCardBentoHorizontalData.map((item) => (
            <ProductCardBentoHorizontal key={item.id} images={item.images} />
          ))}
        </div>
      </div>
      <div className="grid col-span-4 gap-y-4">
        {productBentoData.map((item) => (
          <ProductCardBento
            key={item.id}
            images={item.images}
            category={item.category}
            heading={item.heading}
          />
        ))}
      </div>
    </section>
  );
};

export default BentoGridProduct;
