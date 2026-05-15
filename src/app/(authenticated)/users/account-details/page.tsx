import {
  ArrowRightIcon,
  CalendarIcon,
  CheckCircle2Icon,
  EyeIcon,
  MailIcon,
  ShieldCheckIcon,
  UserIcon,
} from "lucide-react";

const AccountDetailsPage = () => {
  return (
    <section className="space-y-8">
      {/* Header */}
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

      <div className="grid grid-cols-12 gap-6">
        {/* Main Form */}
        <div className="col-span-8 rounded-md border border-gray-200 bg-white p-8">
          <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
            Personal Information
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-7">
            <Field label="First Name" defaultValue="Jason" />
            <Field label="Last Name" defaultValue="Dev." />
            <Field label="Email Address" defaultValue="jasondev@example.com" />
            <Field label="Phone Number" defaultValue="+1 (555) 123-4567" />

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

        {/* Right Cards */}
        <aside className="col-span-4 space-y-6">
          <div className="rounded-md border border-gray-200 bg-white p-7">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Account Summary
            </h2>

            <div className="mt-7 flex gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <UserIcon size={28} />
              </div>

              <div className="flex-1 space-y-5">
                <SummaryRow label="Member since" value="May 10, 2024" />
                <SummaryRow label="Account Type" value="Standard Member" />
                <SummaryRow label="Total Orders" value="12" />

                <button className="flex items-center gap-3 font-roboto text-sm">
                  View Order History
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-gray-200 bg-white p-7">
            <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
              Security
            </h2>

            <div className="mt-7 flex gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <ShieldCheckIcon size={28} />
              </div>

              <div className="flex-1">
                <p className="font-roboto text-sm">Keep your account secure</p>

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
        </aside>
      </div>
    </section>
  );
};

const Field = ({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: string;
}) => {
  return (
    <div>
      <label className="font-roboto text-sm text-black">{label}</label>
      <input
        type="text"
        defaultValue={defaultValue}
        className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none"
      />
    </div>
  );
};

const PasswordField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div>
      <label className="font-roboto text-sm text-black">{label}</label>

      <div className="relative mt-3">
        <input
          type="password"
          placeholder={placeholder}
          className="h-14 w-full rounded-md border border-gray-300 px-4 pr-12 font-roboto text-sm outline-none"
        />

        <EyeIcon
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
        />
      </div>
    </div>
  );
};

const SummaryRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="border-b border-gray-200 pb-5 last:border-b-0">
      <p className="font-roboto text-sm text-gray-500">{label}</p>
      <p className="mt-2 font-roboto text-sm text-black">{value}</p>
    </div>
  );
};

const Preference = ({ label, active }: { label: string; active?: boolean }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="font-roboto text-sm">{label}</span>

      <button
        className={`relative h-6 w-11 rounded-full transition ${
          active ? "bg-black" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            active ? "right-1" : "left-1"
          }`}
        />
      </button>
    </div>
  );
};

export default AccountDetailsPage;
