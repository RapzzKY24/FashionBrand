import {
  ArrowRightIcon,
  CalendarIcon,
  CheckCircle2Icon,
  MailIcon,
  ShieldCheckIcon,
  UserIcon,
} from "lucide-react";
import { AccountService } from "../services/account";
import { Field } from "../components/Field";
import { PasswordField } from "../components/PasswordField";
import { SummaryRow } from "../components/SummaryRow";
import { Preference } from "../components/Preference";
import Reveal from "@/src/animations/Reveal";

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function AccountDetailsPage() {
  const profile = await AccountService.getProfile();

  const [firstName, ...lastNameParts] = profile?.name.split(" ") ?? [
    "Jason",
    "Dev.",
  ];
  const lastName = lastNameParts.join(" ") || "Dev.";
  const email = profile?.email ?? "jasondev@example.com";
  const memberSince = profile?.created_at
    ? formatDate(profile.created_at)
    : "May 10, 2024";
  const accountType =
    profile?.role === "admin" ? "Admin" : "Standard Member";

  return (
    <section className="space-y-8">
      <Reveal>
        <div>
          <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
            <span>Home</span>
            <span>/</span>
            <span className="text-black">Account Details</span>
          </div>

          <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
            Account Details
          </h1>

          <p className="mt-3 font-roboto text-sm text-gray-500">
            Manage your personal information and account preferences.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-12 gap-6">
        <Reveal delay={0.1} className="col-span-8">
          <div className="rounded-md border border-gray-200 bg-white p-8">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Personal Information
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-7">
              <Field label="First Name" defaultValue={firstName} />
              <Field label="Last Name" defaultValue={lastName} />
              <Field label="Email Address" defaultValue={email} />
              <Field
                label="Phone Number"
                defaultValue="+1 (555) 123-4567"
              />

              <div>
                <label className="font-roboto text-sm text-black">
                  Date of Birth
                </label>

                <div className="relative mt-3">
                  <input
                    type="text"
                    defaultValue="May 15, 1995"
                    className="h-14 w-full rounded-md border border-gray-300 px-4 pr-12 font-roboto text-sm outline-none"
                  />
                  <CalendarIcon
                    size={18}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-roboto text-sm text-black">
                  Gender (Optional)
                </label>

                <select className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none">
                  <option>Prefer not to say</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="my-8 h-px bg-gray-200" />

            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Change Password
            </h2>

            <div className="mt-8 space-y-7">
              <PasswordField
                label="Current Password"
                placeholder="Enter current password"
              />

              <div className="grid grid-cols-2 gap-7">
                <PasswordField
                  label="New Password"
                  placeholder="Enter new password"
                />
                <PasswordField
                  label="Confirm New Password"
                  placeholder="Confirm new password"
                />
              </div>

              <div className="flex items-center gap-10">
                {[
                  "At least 8 characters",
                  "Include a number",
                  "Include an uppercase letter",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 font-roboto text-sm text-gray-500"
                  >
                    <CheckCircle2Icon size={17} />
                    {item}
                  </div>
                ))}
              </div>

              <button className="h-14 rounded-md bg-black px-9 font-roboto text-sm uppercase tracking-[0.08em] text-white hover:bg-neutral-800">
                Save Changes
              </button>
            </div>
          </div>
        </Reveal>

        {/* Right Cards */}
        <Reveal delay={0.15} className="col-span-4">
          <aside className="space-y-6">
            <Reveal delay={0.2}>
              <div className="rounded-md border border-gray-200 bg-white p-7">
                <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
                  Account Summary
                </h2>

                <div className="mt-7 flex gap-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                    <UserIcon size={28} />
                  </div>

                  <div className="flex-1 space-y-5">
                    <SummaryRow label="Member since" value={memberSince} />
                    <SummaryRow label="Account Type" value={accountType} />
                    <SummaryRow label="Total Orders" value="12" />

                    <button className="flex items-center gap-3 font-roboto text-sm">
                      View Order History
                      <ArrowRightIcon size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="rounded-md border border-gray-200 bg-white p-7">
                <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
                  Security
                </h2>

                <div className="mt-7 flex gap-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                    <ShieldCheckIcon size={28} />
                  </div>

                  <div className="flex-1">
                    <p className="font-roboto text-sm">
                      Keep your account secure
                    </p>

                    <div className="my-5 h-px bg-gray-200" />

                    <p className="font-roboto text-sm text-gray-500">
                      Last password change
                    </p>
                    <p className="mt-2 font-roboto text-sm">May 10, 2024</p>

                    <button className="mt-7 h-12 w-full rounded-md border border-black font-roboto text-sm font-bold uppercase tracking-[0.08em] hover:bg-gray-50">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="rounded-md border border-gray-200 bg-white p-7">
                <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
                  Email Preferences
                </h2>

                <div className="mt-7 flex gap-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                    <MailIcon size={28} />
                  </div>

                  <div className="flex-1">
                    <p className="font-roboto text-sm leading-6">
                      Manage the emails you want to receive from us.
                    </p>

                    <div className="my-5 h-px bg-gray-200" />

                    <Preference label="Order Updates" active />
                    <Preference label="Promotions & Discounts" />
                    <Preference label="New Arrivals" active />

                    <button className="mt-6 flex items-center gap-3 font-roboto text-sm">
                      Update Preferences
                      <ArrowRightIcon size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
