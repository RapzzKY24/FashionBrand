import { formatRupiah } from "@/src/utils/formatCurrency";

type OrderSummaryProps = {
  subtotal: number;
  shipping: number;
  total: number;
};

export const OrderSummary = ({ subtotal, shipping, total }: OrderSummaryProps) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
        Order Summary
      </h2>

      <div className="mt-6 space-y-5">
        <div className="flex justify-between font-roboto text-sm">
          <span className="text-gray-500">Subtotal</span>
          <span>{formatRupiah(subtotal)}</span>
        </div>

        <div className="flex justify-between font-roboto text-sm">
          <span className="text-gray-500">Shipping</span>
          <span>{formatRupiah(shipping)}</span>
        </div>

        <div className="flex justify-between font-roboto text-sm">
          <span className="text-gray-500">Discount</span>
          <span>-{formatRupiah(0)}</span>
        </div>
      </div>

      <div className="my-6 h-px bg-gray-200" />

      <div className="flex items-center justify-between">
        <span className="font-roboto text-lg font-bold">Total</span>

        <span className="font-roboto text-2xl font-bold">{formatRupiah(total)}</span>
      </div>
    </div>
  );
};
