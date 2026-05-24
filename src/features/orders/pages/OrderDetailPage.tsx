import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, PackageIcon } from "lucide-react";
import Link from "next/link";
import { OrderService } from "../services/orders";
import { ProductService } from "@/src/features/product/services/product";
import Reveal from "@/src/animations/Reveal";
import { TrackingProgress } from "../components/TrackingProgress";
import { OrderItemsList } from "../components/OrderItemsList";
import { TrackingTimeline } from "../components/TrackingTimeline";
import { OrderSummary as OrderSummaryCard } from "../components/OrderSummary";
import { ShippingAddress } from "../components/ShippingAddress";
import { FeaturedProducts } from "../components/FeaturedProducts";

type Props = {
  params: Promise<{ id: string }>;
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

const steps = [
  "Order Placed",
  "Processing",
  "Shipped",
  "In Transit",
  "Delivered",
];

const statusStepMap: Record<string, number> = {
  pending: 0,
  paid: 0,
  processing: 1,
  shipped: 2,
  delivered: 4,
};

export default async function OrderDetailPage({ params }: Props) {
  const { id } = await params;
  const [order, primaryAddress, featuredProducts] = await Promise.all([
    OrderService.getOrderById(id),
    OrderService.getPrimaryAddress(),
    ProductService.getFeaturedProduct(),
  ]);

  if (!order) {
    return (
      <section className="space-y-8">
        <Reveal>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
                <Link href="/users">Home</Link>
                <span>/</span>
                <Link href="/users/orders">My Orders</Link>
                <span>/</span>
                <span className="text-black">Order Not Found</span>
              </div>
              <h1 className="mt-4 font-barlow text-5xl font-extrabold uppercase tracking-[0.04em] text-black">
                ORDER NOT FOUND
              </h1>
            </div>
            <Link
              href="/users/orders"
              className="flex h-11 items-center gap-2 rounded-md border border-gray-300 px-5 font-roboto text-sm hover:bg-gray-50"
            >
              <ArrowLeftIcon size={16} />
              Back to Orders
            </Link>
          </div>
        </Reveal>
      </section>
    );
  }

  const activeIndex = statusStepMap[order.order_status] ?? 0;
  const dates = steps.map((_, i) => {
    const tracking = order.tracking?.[i];
    if (tracking) {
      const d = new Date(tracking.created_at);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    }
    if (i === steps.length - 1) return "Est. TBD";
    return "";
  });

  const displayStatus = order.order_status
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <section className="space-y-8">
      <Reveal>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
              <Link href="/users">Home</Link>
              <span>/</span>
              <Link href="/users/orders">My Orders</Link>
              <span>/</span>
              <span className="text-black">Order #{order.order_number}</span>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <h1 className="font-barlow text-5xl font-extrabold uppercase tracking-[0.04em] text-black">
                ORDER #{order.order_number}
              </h1>

              <span className="rounded-full bg-black px-4 py-2 font-roboto text-xs text-white">
                {displayStatus}
              </span>
            </div>

            <p className="mt-3 font-roboto text-sm text-gray-500">
              Placed on {formatDate(order.created_at)}
            </p>
          </div>

          <Link
            href="/users/orders"
            className="flex h-11 items-center gap-2 rounded-md border border-gray-300 px-5 font-roboto text-sm hover:bg-gray-50"
          >
            <ArrowLeftIcon size={16} />
            Back to Orders
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-12 gap-6">
        <Reveal delay={0.1} className="col-span-9">
          <div className="space-y-6">
            <div className="rounded-md border border-gray-200 bg-white p-6">
              <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
                Track Your Order
              </h2>

              <div className="mt-10">
                <TrackingProgress
                  steps={steps}
                  activeIndex={activeIndex}
                  dates={dates}
                />
              </div>

              <div className="mt-10 flex items-center justify-between rounded-md bg-gray-50 p-5">
                <div className="flex items-center gap-4">
                  <PackageIcon size={24} />

                  <div>
                    <h3 className="font-roboto text-sm font-bold">
                      Your order is on the way!
                    </h3>

                    <p className="mt-1 font-roboto text-sm text-gray-500">
                      Your package is in transit and on its way to you.
                    </p>
                  </div>
                </div>

                <button className="flex h-11 items-center gap-2 rounded-md bg-black px-5 font-roboto text-sm text-white">
                  View on Map
                  <ExternalLinkIcon size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-6">
                <OrderItemsList items={order.items} />
              </div>

              <div className="col-span-6">
                <TrackingTimeline
                  tracking={order.tracking}
                  trackingNumber={order.tracking_number}
                />
              </div>
            </div>

            <FeaturedProducts products={featuredProducts ?? []} />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="col-span-3">
          <div className="space-y-6">
            <OrderSummaryCard
              subtotal={order.subtotal}
              shipping={order.shipping}
              total={order.total}
            />

            <ShippingAddress
              recipientName={primaryAddress?.recipient_name ?? "Recipient"}
              street={primaryAddress?.full_address ?? "No address on file"}
              cityState={`${primaryAddress?.city ?? ""}, ${primaryAddress?.province ?? ""} ${primaryAddress?.postal_code ?? ""}`}
              country="Indonesia"
              phone={primaryAddress?.phone_number ?? "-"}
            />

            <div className="rounded-md border border-gray-200 bg-white p-6">
              <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
                Need Help?
              </h2>

              <p className="mt-4 font-roboto text-sm leading-6 text-gray-500">
                If you have any questions about your order, we&apos;re here to
                help.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Contact Support",
                  "Shipping & Delivery",
                  "Returns & Refunds",
                  "FAQ",
                ].map((item) => (
                  <button
                    key={item}
                    className="flex w-full items-center justify-between font-roboto text-sm"
                  >
                    {item}
                    <ArrowRightIcon size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
