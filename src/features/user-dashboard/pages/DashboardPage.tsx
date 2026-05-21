import { AccountService } from "../../account-details/services/account";
import { OrderService } from "../../orders/services/orders";
import { WishlistService } from "../../wishlist/services/wishlist";
import { WelcomeHeader } from "../components/WelcomeHeader";
import { StatsGrid } from "../components/StatsGrid";
import { RecentOrdersTable } from "../components/RecentOrdersTable";
import { TrackOrderCard } from "../components/TrackOrderCard";
import { WishlistSummaryCard } from "../components/WishlistSummaryCard";
import { AccountDetailsCard } from "../components/AccountDetailsCard";
import { QuickLinks } from "../components/QuickLinks";

export default async function DashboardPage() {
  const [profile, orders] = await Promise.all([
    AccountService.getProfile(),
    OrderService.getOrders(),
  ]);

  const wishlist = await WishlistService.getAll();

  const inTransit = orders.filter(
    (o) => o.shipping_status === "in_transit"
  ).length;
  const delivered = orders.filter(
    (o) => o.shipping_status === "delivered"
  ).length;

  const name = profile?.name?.split(" ")[0] ?? "Jason";
  const recentOrders = orders.slice(0, 4);

  return (
    <section className="space-y-8">
      <WelcomeHeader name={name} />

      <StatsGrid
        totalOrders={orders.length}
        inTransit={inTransit}
        delivered={delivered}
        wishlistCount={wishlist.length}
      />

      <div className="grid grid-cols-12 gap-6">
        <RecentOrdersTable orders={recentOrders} />

        <div className="col-span-5 space-y-6">
          <TrackOrderCard />
          <WishlistSummaryCard count={wishlist.length} />
          <AccountDetailsCard profile={profile} />
        </div>
      </div>

      <QuickLinks />
    </section>
  );
}
