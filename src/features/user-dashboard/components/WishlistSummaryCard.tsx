import { ArrowRightIcon, HeartIcon } from "lucide-react";
import Link from "next/link";

type WishlistSummaryCardProps = {
  count: number;
};

export const WishlistSummaryCard = ({ count }: WishlistSummaryCardProps) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
        Wishlist Summary
      </h2>

      <div className="mt-6 flex items-center gap-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
          <HeartIcon size={28} />
        </div>

        <div>
          <p className="font-roboto text-sm">
            You have {count} items in your wishlist.
          </p>
          <p className="mt-2 font-roboto text-sm text-gray-500">
            Keep track of your favorite items and shop them before they&apos;re
            gone.
          </p>

          <Link
            href="/users/wishlist"
            className="mt-4 flex items-center gap-2 font-roboto text-sm"
          >
            View Wishlist
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
