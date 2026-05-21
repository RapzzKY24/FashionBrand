import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Order } from "../types/orders.types";
import { OrderStatusBadge } from "./OrderStatusBadge";
import { formatRupiah } from "@/src/utils/formatCurrency";

type OrderCardProps = {
  order: Order;
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

export const OrderCard = ({ order }: OrderCardProps) => {
  const firstItem = order.items[0];
  const displayStatus = formatStatus(order.order_status);

  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-4">
            <h2 className="font-roboto text-lg font-bold text-black">
              Order #{order.order_number}
            </h2>
            <OrderStatusBadge status={displayStatus} />
          </div>
          <p className="mt-2 font-roboto text-sm text-gray-500">
            Placed on {formatDate(order.created_at)}
          </p>
        </div>
        <Link
          href={`/users/orders/${order.id}`}
          className="flex items-center gap-2 font-roboto text-sm text-black"
        >
          View Details
          <ArrowRightIcon size={16} />
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-8">
        <div className="col-span-7 flex items-center gap-6">
          <div className="relative h-32 w-32 rounded-md bg-gray-100 overflow-hidden">
            {firstItem && (
              <Image
                src={firstItem.product_image}
                alt={firstItem.product_name}
                fill
                className="object-contain"
              />
            )}
          </div>
          <div>
            <h3 className="font-roboto text-base font-bold text-black">
              {firstItem?.product_name ?? "Product"}
            </h3>
            <div className="mt-3 space-y-2">
              <p className="font-roboto text-sm text-gray-500">
                Order ID: #{order.order_number}
              </p>
              <p className="font-roboto text-sm text-gray-500">
                {order.items.length} Item(s)
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-5 space-y-3">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <span className="font-roboto text-sm text-gray-500">
              Total
            </span>
            <span className="font-roboto text-sm font-bold text-black">
              {formatRupiah(order.total)}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <span className="font-roboto text-sm text-gray-500">
              Status
            </span>
            <OrderStatusBadge status={displayStatus} />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-roboto text-sm text-gray-500">
              Shipping
            </span>
            <span className="font-roboto text-sm text-black">
              {formatRupiah(order.shipping)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
        <button className="font-roboto text-sm text-gray-500 hover:text-black transition">
          Download Invoice
        </button>
        <div className="flex items-center gap-4">
          <Link
            href={`/users/track-order/${order.order_number}`}
            className="flex h-11 items-center justify-center rounded-md border border-gray-300 px-5 font-roboto text-sm hover:bg-gray-50 transition"
          >
            Track Order
          </Link>
          <Link
            href={`/users/orders/${order.id}`}
            className="flex h-11 items-center justify-center rounded-md bg-black px-6 font-roboto text-sm text-white hover:bg-neutral-800 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
