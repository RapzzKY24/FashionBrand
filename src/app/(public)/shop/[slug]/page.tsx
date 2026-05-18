import ColorSelector from "@/src/features/product/components/CollorSelector";
import ProductBreadcrumb from "@/src/features/product/components/ProductBreadcrumb";
import ProductGallery from "@/src/features/product/components/ProductGallery";
import ProductInfo from "@/src/features/product/components/ProductInfo";
import QuantityActions from "@/src/features/product/components/QuantityActions";
import RelatedProducts from "@/src/features/product/components/RelatedProducts";
import SizeSelector from "@/src/features/product/components/SizeSelector";
import { ProductService } from "@/src/features/product/services/product";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await ProductService.getBySlug(slug);

  const relatedProduct = await ProductService.getRelatedProduct(slug);

  if (!product) return null;

  return (
    <section className="flex flex-col space-y-16 px-16 py-6 overflow-hidden w-full pt-30">
      <ProductBreadcrumb title={product.name} />

      <div className="grid grid-cols-12 gap-12 w-full">
        <ProductGallery image={product.image} title={product.name} />

        <div className="col-span-5 flex flex-col justify-center gap-y-7">
          <ProductInfo
            category={product.category}
            title={product.name}
            price={product.price}
          />

          <div className="h-px w-full bg-gray-300" />

          <ColorSelector />
          <SizeSelector />
          <QuantityActions
            productId={product.id}
            stock_status={product.stock_status}
          />
          {/* <ProductAccordion /> */}
        </div>
      </div>

      <RelatedProducts products={relatedProduct} />
    </section>
  );
}
