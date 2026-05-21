import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Profile } from "../../account-details/types/account.types";

type AccountDetailsCardProps = {
  profile: Profile | null;
};

export const AccountDetailsCard = ({ profile }: AccountDetailsCardProps) => {
  const rows: [string, string][] = [
    ["Name", profile?.name ?? "Jason Dev."],
    ["Email", profile?.email ?? "jasondev@example.com"],
    ["Phone", "+1 (555) 123-4567"],
  ];

  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
        Account Details
      </h2>

      <div className="mt-6 divide-y divide-gray-200">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between py-4 font-roboto text-sm"
          >
            <span className="text-gray-500">{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>

      <Link
        href="/users/account-details"
        className="mt-4 flex items-center gap-2 font-roboto text-sm"
      >
        Manage Account
        <ArrowRightIcon size={16} />
      </Link>
    </div>
  );
};
