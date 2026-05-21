import {
  ShoppingBagIcon,
  SearchCheckIcon,
  MapPinIcon,
  CreditCardIcon,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { title: "My Orders", href: "/users/orders", icon: ShoppingBagIcon },
  { title: "Track Order", href: "/users/track-order", icon: SearchCheckIcon },
  { title: "Addresses", href: "/users/addresses", icon: MapPinIcon },
  {
    title: "Payment Methods",
    href: "/users/payment-methods",
    icon: CreditCardIcon,
  },
];

export const QuickLinks = () => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
        Quick Links
      </h2>

      <div className="mt-6 grid grid-cols-4 gap-4">
        {quickLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex h-24 flex-col items-center justify-center gap-3 rounded-md border border-gray-200 font-roboto text-sm hover:bg-gray-50"
            >
              <Icon size={22} />
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
