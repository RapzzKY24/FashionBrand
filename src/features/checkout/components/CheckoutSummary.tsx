import Image from "next/image";
import { ShieldCheckIcon } from "lucide-react";
import { formatRupiah } from "@/src/utils/formatCurrency";
import { Cart } from "../types/checkout.types";

type Props = {
  cart: Cart;
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
};

export const CheckoutSummary = ({
  cart,
  subtotal,
  shipping,
  discount,
  total,
}: Props) => {
  return (
    <aside className="col-span-4 flex flex-col gap-6">
      <div className="rounded-md border border-gray-200 bg-white p-7">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
            Order Summary
          </h2>
          <p className="font-roboto text-sm text-gray-500">
            {cart.total_items} Items
          </p>
        </div>

        <div className="space-y-6">
          {cart.items.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-4">
              <div className="relative col-span-3 h-20 overflow-hidden rounded-md bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="col-span-6">
                <h3 className="font-roboto text-sm font-bold">{item.name}</h3>
                <p className="mt-2 font-roboto text-sm text-gray-500">
                  Qty: {item.quantity}
                </p>
              </div>

              <div className="col-span-3 flex items-center justify-end">
                <p className="font-roboto text-sm font-bold">
                  {formatRupiah(item.subtotal)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 space-y-4 border-t border-gray-200 pt-7">
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
            <span>- {formatRupiah(discount)}</span>
          </div>

          <div className="flex justify-between border-t border-gray-200 pt-6 font-roboto text-xl font-bold">
            <span>Total</span>
            <span>{formatRupiah(total)}</span>
          </div>
        </div>
      </div>

      <div className="rounded-md border border-gray-200 bg-white p-7">
        <div className="flex items-center gap-4">
          <ShieldCheckIcon size={24} />
          <div>
            <h3 className="font-roboto text-sm font-bold">Secure Checkout</h3>
            <p className="mt-1 font-roboto text-sm text-gray-500">
              Your data is protected
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
