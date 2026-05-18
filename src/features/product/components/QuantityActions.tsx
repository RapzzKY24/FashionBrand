import ButtonAddToCart from "./ButtonAddToCart";

export default function QuantityActions({
  productId,
  stock_status,
}: {
  productId: string;
  stock_status: string;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium font-roboto uppercase tracking-[0.08em]">
        Quantity
      </h2>

      <div className="flex items-center gap-5">
        <ButtonAddToCart productId={productId} stock_status={stock_status} />
        <button className="flex-1 h-14 bg-white border border-black rounded-xl text-black font-roboto text-sm uppercase tracking-[0.08em] hover:bg-gray-100 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
