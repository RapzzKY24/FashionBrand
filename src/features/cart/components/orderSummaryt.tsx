import {
  BanknoteIcon,
  HeadphonesIcon,
  RefreshCcwIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "lucide-react";
import { InfoItem } from "./infoItem";
import { formatRupiah } from "@/src/utils/formatCurrency";

type OrderSummaryProps = {
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
};

export const OrderSummary = ({
  subtotal,
  shipping,
  discount,
  total,
}: OrderSummaryProps) => {
  return (
    <aside className="col-span-3 space-y-6">
      <div className="border border-gray-200 rounded-md p-7 bg-white">
        <h2 className="font-roboto font-bold uppercase tracking-[0.25em] text-[14px] mb-7">
          Order Summary
        </h2>

        <div className="space-y-5">
          <div className="flex justify-between font-roboto text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span>{formatRupiah(subtotal)}</span>
          </div>

          <div className="flex justify-between font-roboto text-sm">
            <span className="text-gray-600">Shipping</span>
            <span>{formatRupiah(shipping)}</span>
          </div>

          <div className="flex justify-between font-roboto text-sm">
            <span className="text-gray-600">Discount</span>
            <span>{formatRupiah(discount)}</span>
          </div>
        </div>

        <div className="h-px bg-gray-200 my-7" />

        <div className="flex justify-between items-center mb-7">
          <h3 className="font-roboto font-bold uppercase tracking-[0.12em]">
            Total
          </h3>
          <p className="font-roboto font-bold text-xl">{formatRupiah(total)}</p>
        </div>

        <div className="bg-neutral-100 rounded-md p-4 flex items-center gap-4 mb-6">
          <TruckIcon size={22} />
          <div>
            <p className="font-roboto text-xs font-medium text-black">
              Free shipping on orders over $200
            </p>
            <p className="font-roboto text-xs text-gray-500">
              You&apos;re $-15 away from free shipping!
            </p>
          </div>
        </div>

        <button className="w-full h-14 bg-black text-white rounded-md font-roboto text-sm uppercase tracking-[0.25em] hover:bg-neutral-800 transition">
          Checkout
        </button>

        <button className="mt-4 w-full h-14 bg-white border border-black rounded-md font-roboto text-xl font-semibold hover:bg-gray-100 transition">
          <div className="flex items-center justify-center gap-x-2">
            <BanknoteIcon />
            Pay
          </div>
        </button>

        <div className="mt-7">
          <p className="font-roboto text-xs text-gray-500 mb-3">We accept</p>

          <div className="flex items-center gap-2">
            {["VISA", "MC", "AMEX", "PayPal", "••"].map((item) => (
              <div
                key={item}
                className="px-3 py-1 border border-gray-200 rounded text-[10px] font-roboto font-bold bg-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-md p-7 bg-white space-y-6">
        <InfoItem
          icon={<ShieldCheckIcon size={22} />}
          title="Secure Checkout"
          desc="Your data is protected"
        />
        <InfoItem
          icon={<RefreshCcwIcon size={22} />}
          title="Easy Returns"
          desc="14-day return policy"
        />
        <InfoItem
          icon={<HeadphonesIcon size={22} />}
          title="Customer Support"
          desc="We're here to help"
        />
      </div>
    </aside>
  );
};
