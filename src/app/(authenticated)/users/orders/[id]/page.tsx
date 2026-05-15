import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CircleIcon,
  CopyIcon,
  ExternalLinkIcon,
  PackageIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const orderItems = [
  {
    id: 1,
    name: "Men BLVCK Grey Hoodie",
    image: "/hoddieCollection/hoddie1.png",
    size: "L",
    color: "Grey",
    price: "$180.00",
    qty: 1,
  },
  {
    id: 2,
    name: "Hip Hop Street Wear Hoodie",
    image: "/hoddieCollection/hoddie4.png",
    size: "XL",
    color: "Black",
    price: "$240.00",
    qty: 2,
  },
  {
    id: 3,
    name: "Retro Rapper Tupac Hoodie",
    image: "/hoddieCollection/hoddie2.png",
    size: "M",
    color: "Blue",
    price: "$100.00",
    qty: 1,
  },
];

const trackingHistory = [
  {
    title: "In Transit",
    date: "May 22, 08:30 AM",
    desc: "Package is on the way to the destination.",
    active: true,
  },
  {
    title: "Departed from Facility",
    date: "May 21, 11:20 PM",
    desc: "Left from sorting facility.",
  },
  {
    title: "Arrived at Facility",
    date: "May 21, 06:45 PM",
    desc: "Package arrived at sorting facility.",
  },
  {
    title: "Shipped",
    date: "May 21, 09:40 AM",
    desc: "Package has been picked up by courier.",
  },
  {
    title: "Order Placed",
    date: "May 20, 10:24 AM",
    desc: "Your order has been placed successfully.",
  },
];

const steps = [
  "Order Placed",
  "Processing",
  "Shipped",
  "In Transit",
  "Delivered",
];

const OrderDetailPage = () => {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
            <Link href="/users">Home</Link>
            <span>/</span>
            <Link href="/users/orders">My Orders</Link>
            <span>/</span>
            <span className="text-black">Order #BLCK78945</span>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <h1 className="font-barlow text-5xl font-extrabold uppercase tracking-[0.04em] text-black">
              ORDER #BLCK78945
            </h1>

            <span className="rounded-full bg-black px-4 py-2 font-roboto text-xs text-white">
              In Transit
            </span>
          </div>

          <p className="mt-3 font-roboto text-sm text-gray-500">
            Placed on May 20, 2024 at 10:24 AM
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

      <div className="grid grid-cols-12 gap-6">
        {/* Left */}
        <div className="col-span-9 space-y-6">
          {/* Tracking */}
          <div className="rounded-md border border-gray-200 bg-white p-6">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Track Your Order
            </h2>

            {/* Progress */}
            <div className="mt-10 flex items-center justify-between">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="relative flex flex-1 flex-col items-center"
                >
                  <div
                    className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border ${
                      index <= 2
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    {index <= 2 && (
                      <div className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </div>

                  {index !== steps.length - 1 && (
                    <div
                      className={`absolute left-1/2 top-4 h-px w-full ${
                        index <= 1 ? "bg-black" : "bg-gray-300"
                      }`}
                    />
                  )}

                  <div className="mt-4 text-center">
                    <p className="font-roboto text-xs font-medium uppercase">
                      {step}
                    </p>

                    <p className="mt-1 font-roboto text-xs text-gray-500">
                      {index === 0 && "May 20, 10:24 AM"}
                      {index === 1 && "May 20, 02:15 PM"}
                      {index === 2 && "May 21, 09:40 AM"}
                      {index === 3 && "May 22, 08:30 AM"}
                      {index === 4 && "Est. May 24"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Notice */}
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

          {/* Bottom Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Items */}
            <div className="col-span-6 rounded-md border border-gray-200 bg-white p-6">
              <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
                Items In This Order
              </h2>

              <div className="mt-6 divide-y divide-gray-200">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-5 py-5">
                    <div className="relative h-24 w-24 rounded-md bg-gray-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-roboto text-sm font-bold">
                        {item.name}
                      </h3>

                      <div className="mt-2 space-y-1">
                        <p className="font-roboto text-xs text-gray-500">
                          Size: {item.size} ・ Color: {item.color}
                        </p>

                        <p className="font-roboto text-xs text-gray-500">
                          {item.price} ・ Qty: {item.qty}
                        </p>
                      </div>
                    </div>

                    <p className="font-roboto text-sm font-medium">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>

              <button className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-md border border-gray-200 font-roboto text-sm hover:bg-gray-50">
                View Invoice
                <CopyIcon size={16} />
              </button>
            </div>

            {/* Tracking History */}
            <div className="col-span-6 rounded-md border border-gray-200 bg-white p-6">
              <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
                Tracking Details
              </h2>

              <div className="mt-8 space-y-8">
                {trackingHistory.map((item, index) => (
                  <div key={index} className="relative flex gap-5">
                    <div className="relative flex flex-col items-center">
                      <CircleIcon
                        size={14}
                        className={
                          item.active
                            ? "fill-black text-black"
                            : "fill-white text-gray-400"
                        }
                      />

                      {index !== trackingHistory.length - 1 && (
                        <div className="mt-2 h-16 w-px bg-gray-300" />
                      )}
                    </div>

                    <div>
                      <h3 className="font-roboto text-sm font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-1 font-roboto text-xs text-gray-500">
                        {item.date}
                      </p>

                      <p className="mt-2 font-roboto text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
                <span className="font-roboto text-sm font-medium">
                  Tracking Number
                </span>

                <div className="flex items-center gap-2">
                  <span className="font-roboto text-sm">BLCK789456123</span>

                  <button>
                    <CopyIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          <div className="rounded-md border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
                You Might Also Like
              </h2>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
                <ArrowRightIcon size={16} />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-5 gap-4">
              {[
                "/hoddieCollection/hoddie1.png",
                "/hoddieCollection/hoddie5.png",
                "/hoddieCollection/hoddie4.png",
                "/hoddieCollection/hoddie2.png",
                "/hoddieCollection/hoddie1.png",
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative h-44 rounded-md bg-gray-100 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="product"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-3 space-y-6">
          {/* Summary */}
          <div className="rounded-md border border-gray-200 bg-white p-6">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Order Summary
            </h2>

            <div className="mt-6 space-y-5">
              <div className="flex justify-between font-roboto text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span>$520.00</span>
              </div>

              <div className="flex justify-between font-roboto text-sm">
                <span className="text-gray-500">Shipping</span>
                <span>$15.00</span>
              </div>

              <div className="flex justify-between font-roboto text-sm">
                <span className="text-gray-500">Discount</span>
                <span>-$0.00</span>
              </div>
            </div>

            <div className="my-6 h-px bg-gray-200" />

            <div className="flex items-center justify-between">
              <span className="font-roboto text-lg font-bold">Total</span>

              <span className="font-roboto text-2xl font-bold">$535.00</span>
            </div>
          </div>

          {/* Address */}
          <div className="rounded-md border border-gray-200 bg-white p-6">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Shipping Address
            </h2>

            <div className="mt-6 space-y-2 font-roboto text-sm">
              <p className="font-bold">Jason Dev.</p>
              <p className="text-gray-500">123 Street Name</p>
              <p className="text-gray-500">Los Angeles, CA 90001</p>
              <p className="text-gray-500">United States</p>
              <p className="text-gray-500">+1 (555) 123-4567</p>
            </div>

            <button className="mt-6 h-11 w-full rounded-md border border-gray-300 font-roboto text-sm hover:bg-gray-50">
              View or Edit Address
            </button>
          </div>

          {/* Help */}
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
      </div>
    </section>
  );
};

export default OrderDetailPage;
