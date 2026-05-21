import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Order } from "../../orders/types/orders.types";
import { formatRupiah } from "@/src/utils/formatCurrency";

type RecentOrdersTableProps = {
  orders: Order[];
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatStatus = (status: string) => {
  return status.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

export const RecentOrdersTable = ({ orders }: RecentOrdersTableProps) => {
  return (
    <div className="col-span-7 rounded-md border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
          Recent Orders
        </h2>

        <Link
          href="/users/orders"
          className="flex items-center gap-2 font-roboto text-sm"
        >
          View All Orders
          <ArrowRightIcon size={16} />
        </Link>
      </div>

      <div className="mt-6 divide-y divide-gray-200">
        {orders.map((order) => {
          const firstItem = order.items[0];

          return (
            <div
              key={order.id}
              className="grid grid-cols-12 items-center gap-4 py-4"
            >
              <div className="relative col-span-2 h-20 w-20 rounded-md bg-gray-100">
                {firstItem && (
                  <Image
                    src={firstItem.product_image}
                    alt={firstItem.product_name}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              <div className="col-span-5">
                <h3 className="font-roboto text-sm font-bold">
                  {firstItem?.product_name ?? "Product"}
                </h3>
                <p className="mt-1 font-roboto text-xs text-gray-500">
                  Order {order.order_number}
                </p>
                <p className="mt-1 font-roboto text-xs text-gray-500">
                  {formatDate(order.created_at)}
                </p>
              </div>

              <div className="col-span-2">
                <span className="rounded-full bg-gray-100 px-4 py-2 font-roboto text-xs">
                  {formatStatus(order.order_status)}
                </span>
              </div>

              <p className="col-span-2 font-roboto text-sm">
                {formatRupiah(order.total)}
              </p>

              <button className="col-span-1 flex justify-end">
                <ArrowRightIcon size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
