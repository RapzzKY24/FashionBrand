import { products } from "@/src/data/Product";
import ColorSelector from "@/src/pages/shop/components/CollorSelector";
import ProductAccordion from "@/src/pages/shop/components/ProductAccordion";
import ProductBreadcrumb from "@/src/pages/shop/components/ProductBreadcrumb";
import ProductGallery from "@/src/pages/shop/components/ProductGallery";
import ProductInfo from "@/src/pages/shop/components/ProductInfo";
import QuantityActions from "@/src/pages/shop/components/QuantityActions";
import RelatedProducts from "@/src/pages/shop/components/RelatedProducts";
import SizeSelector from "@/src/pages/shop/components/SizeSelector";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id == id);

  if (!product) return null;

  return (
    <section className="flex flex-col space-y-16 px-16 py-6 overflow-hidden w-full pt-30">
      <ProductBreadcrumb title={product.title} />

      <div className="grid grid-cols-12 gap-12 w-full">
        <ProductGallery image={product.image} title={product.title} />

        <div className="col-span-5 flex flex-col justify-center gap-y-7">
          <ProductInfo
            category={product.category}
            title={product.title}
            price={product.price}
          />

          <div className="h-px w-full bg-gray-300" />

          <ColorSelector />
          <SizeSelector />
          <QuantityActions />
          <ProductAccordion />
        </div>
      </div>

      <RelatedProducts products={products.slice(0, 3)} />
    </section>
  );
}
