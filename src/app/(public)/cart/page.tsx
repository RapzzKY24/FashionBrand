import {
  ArrowLeftIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  Trash2Icon,
  TruckIcon,
  RefreshCcwIcon,
  HeadphonesIcon,
  ShieldCheckIcon,
  XIcon,
  BanknoteIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cartItems = [
  {
    id: 1,
    name: "Men BLVCK Grey Hoodie",
    image: "/hoddieCollection/hoddie1.png",
    size: "L",
    color: "Grey",
    price: 180,
    qty: 1,
  },
  {
    id: 2,
    name: "Hip Hop Street Wear Hoodie",
    image: "/hoddieCollection/hoddie4.png",
    size: "XL",
    color: "Black",
    price: 120,
    qty: 2,
  },
  {
    id: 3,
    name: "Retro Rapper Tupac Hoodie",
    image: "/hoddieCollection/hoddie2.png",
    size: "M",
    color: "Blue",
    price: 100,
    qty: 1,
  },
];

const CheckoutPage = () => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const shipping = 15;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <section className="px-16 py-6 overflow-hidden w-full pt-26 flex flex-col gap-y-8">
      {/* Header */}
      <div className="flex flex-col justify-center gap-y-2">
        <h1 className="text-[14px] text-black font-roboto font-light">
          Home <span className="text-gray-400 mx-2">/</span> Cart
        </h1>

        <h1 className="text-6xl font-barlow font-extrabold text-black uppercase tracking-[0.08rem]">
          YOUR CART
        </h1>

        <p className="text-[16px] text-gray-500 font-roboto font-light">
          Review your selected items before checkout.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 items-start">
        <div className="col-span-9 border border-gray-200 rounded-md overflow-hidden bg-white">
          <div className="grid grid-cols-12 px-8 py-5 border-b border-gray-200">
            <h2 className="col-span-5 text-[12px] uppercase tracking-[0.25em] font-roboto text-black">
              Product
            </h2>
            <h2 className="col-span-2 text-[12px] uppercase tracking-[0.25em] font-roboto text-black">
              Price
            </h2>
            <h2 className="col-span-3 text-[12px] uppercase tracking-[0.25em] font-roboto text-black">
              Quantity
            </h2>
            <h2 className="col-span-2 text-[12px] uppercase tracking-[0.25em] font-roboto text-black">
              Total
            </h2>
          </div>
          <div className="px-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 items-center gap-6 py-6 border-b border-gray-200 last:border-b-0"
              >
                <div className="col-span-5 flex items-center gap-7">
                  <div className="relative w-40 h-40 bg-neutral-100 rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h3 className="font-roboto font-bold text-[16px] text-black">
                      {item.name}
                    </h3>
                    <div className="space-y-1">
                      <p className="font-roboto text-sm text-black">
                        Size: {item.size}
                      </p>
                      <p className="font-roboto text-sm text-black">
                        Color: {item.color}
                      </p>
                    </div>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-black transition w-fit">
                      <HeartIcon size={16} />
                      <span className="font-roboto text-sm">
                        Move to Wishlist
                      </span>
                    </button>
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="font-roboto text-xl text-black">
                    ${item.price}
                  </p>
                </div>
                <div className="col-span-3">
                  <div className="flex w-32 h-11 bg-white border border-gray-300 rounded-md overflow-hidden">
                    <button className="flex-1 flex items-center justify-center hover:bg-gray-50 transition">
                      <MinusIcon size={16} />
                    </button>
                    <div className="flex-1 flex items-center justify-center font-roboto text-[16px]">
                      {item.qty}
                    </div>
                    <button className="flex-1 flex items-center justify-center hover:bg-gray-50 transition">
                      <PlusIcon size={16} />
                    </button>
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-between">
                  <p className="font-roboto font-bold text-xl text-black">
                    ${item.price * item.qty}
                  </p>

                  <button className="text-gray-500 hover:text-black transition">
                    <XIcon size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="px-8 pb-6">
            <div className="border border-gray-200 rounded-md h-16 flex items-center justify-between px-6">
              <Link
                href="/shop"
                className="flex items-center gap-3 font-roboto text-sm text-black"
              >
                <ArrowLeftIcon size={18} />
                Continue Shopping
              </Link>

              <button className="flex items-center gap-3 font-roboto text-sm text-red-500">
                <Trash2Icon size={17} />
                Clear Cart
              </button>
            </div>
          </div>
        </div>
        <aside className="col-span-3 space-y-6">
          <div className="border border-gray-200 rounded-md p-7 bg-white">
            <h2 className="font-roboto font-bold uppercase tracking-[0.25em] text-[14px] mb-7">
              Order Summary
            </h2>
            <div className="space-y-5">
              <div className="flex justify-between font-roboto text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between font-roboto text-sm">
                <span className="text-gray-600">Shipping</span>
                <span>${shipping}</span>
              </div>
              <div className="flex justify-between font-roboto text-sm">
                <span className="text-gray-600">Discount</span>
                <span>${discount}</span>
              </div>
            </div>
            <div className="h-px bg-gray-200 my-7" />
            <div className="flex justify-between items-center mb-7">
              <h3 className="font-roboto font-bold uppercase tracking-[0.12em]">
                Total
              </h3>
              <p className="font-roboto font-bold text-xl">${total}</p>
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
            <button className="mt-4 w-full h-14 bg-white border border-black rounded-md font-roboto text-xl font-semibold  hover:bg-gray-100 transition">
              <div className="flex items-center justify-center gap-x-2">
                <BanknoteIcon />
                Pay
              </div>
            </button>
            <div className="mt-7">
              <p className="font-roboto text-xs text-gray-500 mb-3">
                We accept
              </p>
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
      </div>
    </section>
  );
};

const InfoItem = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-roboto text-sm font-bold text-black">{title}</h3>
        <p className="font-roboto text-xs text-gray-500 mt-1">{desc}</p>
      </div>
    </div>
  );
};

export default CheckoutPage;
