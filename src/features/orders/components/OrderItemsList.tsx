import Image from "next/image";
import { CopyIcon } from "lucide-react";
import { OrderItem } from "../types/orders.types";
import { formatRupiah } from "@/src/utils/formatCurrency";

type OrderItemsListProps = {
  items: OrderItem[];
};

export const OrderItemsList = ({ items }: OrderItemsListProps) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
        Items In This Order
      </h2>

      <div className="mt-6 divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-5 py-5">
            <div className="relative h-24 w-24 rounded-md bg-gray-100 overflow-hidden">
              <Image
                src={item.product_image}
                alt={item.product_name}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-roboto text-sm font-bold">
                {item.product_name}
              </h3>

              <div className="mt-2 space-y-1">
                <p className="font-roboto text-xs text-gray-500">
                  Size: L &middot; Color: Black
                </p>

                <p className="font-roboto text-xs text-gray-500">
                  {formatRupiah(item.price)} &middot; Qty: {item.quantity}
                </p>
              </div>
            </div>

            <p className="font-roboto text-sm font-medium">
              {formatRupiah(item.subtotal)}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-md border border-gray-200 font-roboto text-sm hover:bg-gray-50">
        View Invoice
        <CopyIcon size={16} />
      </button>
    </div>
  );
};
