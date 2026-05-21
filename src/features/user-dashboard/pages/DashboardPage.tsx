import { AccountService } from "../../account-details/services/account";
import { OrderService } from "../../orders/services/orders";
import { WishlistService } from "../../wishlist/services/wishlist";
import { WelcomeHeader } from "../components/WelcomeHeader";
import { StatsGrid } from "../components/StatsGrid";
import { RecentOrdersTable } from "../components/RecentOrdersTable";
import { TrackOrderCard } from "../components/TrackOrderCard";
import { WishlistSummaryCard } from "../components/WishlistSummaryCard";
import { AccountDetailsCard } from "../components/AccountDetailsCard";
import Reveal from "@/src/animations/Reveal";

export default async function DashboardPage() {
  const [profile, orders] = await Promise.all([
    AccountService.getProfile(),
    OrderService.getOrders(),
  ]);

  const wishlist = await WishlistService.getAll();

  const inTransit = orders.filter(
    (o) => o.shipping_status === "in_transit",
  ).length;
  const delivered = orders.filter(
    (o) => o.shipping_status === "delivered",
  ).length;

  const name = profile?.name?.split(" ")[0] ?? "Jason";
  const recentOrders = orders.slice(0, 4);

  return (
    <section className="space-y-8">
      <Reveal>
        <WelcomeHeader name={name} />
      </Reveal>

      <Reveal delay={0.1}>
        <StatsGrid
          totalOrders={orders.length}
          inTransit={inTransit}
          delivered={delivered}
          wishlistCount={wishlist.length}
        />
      </Reveal>

      <Reveal delay={0.15}>
        <div className="grid grid-cols-12 gap-6">
          <RecentOrdersTable orders={recentOrders} />

          <div className="col-span-5 space-y-6">
            <Reveal delay={0.2}>
              <TrackOrderCard />
            </Reveal>
            <Reveal delay={0.25}>
              <WishlistSummaryCard count={wishlist.length} />
            </Reveal>
            <Reveal delay={0.3}>
              <AccountDetailsCard profile={profile} />
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
