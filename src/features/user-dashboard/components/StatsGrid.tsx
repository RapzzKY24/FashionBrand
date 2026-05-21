import {
  ShoppingBagIcon,
  TruckIcon,
  PackageIcon,
  HeartIcon,
} from "lucide-react";
import { StatCardDef } from "../types/dashboard.types";
import { StatsCard } from "./StatsCard";

type StatsGridProps = {
  totalOrders: number;
  inTransit: number;
  delivered: number;
  wishlistCount: number;
};

export const StatsGrid = ({
  totalOrders,
  inTransit,
  delivered,
  wishlistCount,
}: StatsGridProps) => {
  const stats: StatCardDef[] = [
    {
      title: "Total Orders",
      value: String(totalOrders),
      action: "View all orders",
      icon: ShoppingBagIcon,
      href: "/users/orders",
    },
    {
      title: "In Transit",
      value: String(inTransit),
      action: "Track your orders",
      icon: TruckIcon,
      href: "/users/orders",
    },
    {
      title: "Delivered",
      value: String(delivered),
      action: "View delivered orders",
      icon: PackageIcon,
      href: "/users/orders",
    },
    {
      title: "Wishlist Items",
      value: String(wishlistCount),
      action: "View your wishlist",
      icon: HeartIcon,
      href: "/users/wishlist",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((item) => (
        <StatsCard key={item.title} item={item} />
      ))}
    </div>
  );
};
