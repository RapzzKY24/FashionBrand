import {
  CheckIcon,
  CreditCardIcon,
  LockIcon,
  PlusIcon,
  RefreshCcwIcon,
  ShieldCheckIcon,
} from "lucide-react";

import {
  FaApplePay,
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaPaypal,
} from "react-icons/fa";

const paymentMethods = [
  {
    type: "Visa",
    number: "**** **** **** 4242",
    expiry: "05/27",
    owner: "Jason Dev.",
    default: true,
    icon: <FaCcVisa size={42} className="text-blue-700" />,
  },
  {
    type: "Mastercard",
    number: "**** **** **** 8888",
    expiry: "09/26",
    owner: "Jason Dev.",
    icon: <FaCcMastercard size={42} className="text-orange-500" />,
  },
  {
    type: "American Express",
    number: "**** **** **** 1005",
    expiry: "01/25",
    owner: "Jason Dev.",
    icon: <FaCcAmex size={42} className="text-sky-600" />,
  },
  {
    type: "PayPal",
    number: "jasondev@example.com",
    owner: "Jason Dev.",
    icon: <FaCcPaypal size={42} className="text-blue-600" />,
  },
];

const PaymentMethodsPage = () => {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
            <span>Home</span>
            <span>/</span>
            <span className="text-black">Payment Methods</span>
          </div>

          <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
            PAYMENT METHODS
          </h1>

          <p className="mt-3 font-roboto text-sm text-gray-500">
            Manage your saved payment methods and choose your preferred way to
            pay.
          </p>
        </div>

        <button className="flex h-12 items-center gap-3 rounded-md bg-black px-6 font-roboto text-sm uppercase tracking-[0.08em] text-white hover:bg-neutral-800">
          <PlusIcon size={16} />
          Add Payment Method
        </button>
      </div>

      {/* Saved Payment Methods */}
      <div className="rounded-md border border-gray-200 bg-white p-6">
        <h2 className="font-roboto text-lg font-bold uppercase tracking-[0.08em]">
          Saved Payment Methods
        </h2>

        <div className="mt-6 space-y-4">
          {paymentMethods.map((item) => (
            <div
              key={item.number}
              className="flex items-center justify-between rounded-md border border-gray-200 px-5 py-5"
            >
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-20 items-center justify-center rounded-md border border-gray-200 bg-white">
                  {item.icon}
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-roboto text-lg font-bold text-black">
                      {item.type} {item.number}
                    </h3>

                    {item.default && (
                      <span className="rounded-sm bg-black px-3 py-1 font-roboto text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                        Default
                      </span>
                    )}
                  </div>

                  <p className="mt-2 font-roboto text-sm text-gray-500">
                    {item.expiry && `Expires ${item.expiry} ・ `}
                    {item.owner}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                {item.default ? (
                  <div className="flex items-center gap-2 font-roboto text-sm text-gray-500">
                    <CheckIcon size={16} className="text-green-600" />
                    Default
                  </div>
                ) : (
                  <button className="h-11 rounded-md border border-gray-300 px-6 font-roboto text-sm font-bold uppercase tracking-[0.08em] hover:bg-gray-50">
                    Set As Default
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5">
          <LockIcon size={18} />

          <p className="font-roboto text-sm text-gray-500">
            Your payment information is secure and encrypted.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-12 gap-6">
        {/* Add Card */}
        <div className="col-span-8 rounded-md border border-gray-200 bg-white p-6">
          <h2 className="font-roboto text-lg font-bold uppercase tracking-[0.08em]">
            Add New Payment Method
          </h2>

          {/* Payment Tabs */}
          <div className="mt-6 grid grid-cols-3 gap-0 overflow-hidden rounded-md border border-gray-200">
            <button className="flex h-14 items-center justify-center gap-3 border-r border-gray-200 bg-white font-roboto text-sm font-medium">
              <CreditCardIcon size={18} />
              Card
            </button>

            <button className="flex h-14 items-center justify-center gap-3 border-r border-gray-200 bg-gray-50 font-roboto text-sm">
              <FaPaypal size={18} />
              PayPal
            </button>

            <button className="flex h-14 items-center justify-center gap-3 bg-gray-50 font-roboto text-sm">
              <FaApplePay size={24} />
              Apple Pay
            </button>
          </div>

          {/* Form */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <label className="font-roboto text-sm text-black">
                Card Number
              </label>

              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none"
              />
            </div>

            <div>
              <label className="font-roboto text-sm text-black">
                Name on Card
              </label>

              <input
                type="text"
                placeholder="Jason Dev."
                className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none"
              />
            </div>

            <div>
              <label className="font-roboto text-sm text-black">
                Expiry Date
              </label>

              <input
                type="text"
                placeholder="MM / YY"
                className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none"
              />
            </div>

            <div>
              <label className="font-roboto text-sm text-black">CVV</label>

              <input
                type="text"
                placeholder="123"
                className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none"
              />
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-8 flex items-center justify-between">
            <label className="flex items-center gap-3 font-roboto text-sm text-black">
              <input type="checkbox" className="h-4 w-4" />
              Set as default payment method
            </label>

            <button className="h-12 rounded-md bg-black px-8 font-roboto text-sm uppercase tracking-[0.08em] text-white hover:bg-neutral-800">
              Add Card
            </button>
          </div>
        </div>

        {/* Payment Info */}
        <div className="col-span-4 rounded-md border border-gray-200 bg-white p-6">
          <h2 className="font-roboto text-lg font-bold uppercase tracking-[0.08em]">
            Payment Information
          </h2>

          <div className="mt-8 space-y-8">
            <InfoCard
              icon={<ShieldCheckIcon size={24} />}
              title="Secure Payments"
              desc="Your payment details are safe with us. We use industry-standard encryption."
            />

            <InfoCard
              icon={<RefreshCcwIcon size={24} />}
              title="Multiple Options"
              desc="Save multiple payment methods for a faster and easier checkout."
            />

            <InfoCard
              icon={<LockIcon size={24} />}
              title="You're in Control"
              desc="Add, remove, or set your default payment method at any time."
            />
          </div>

          <button className="mt-10 flex items-center gap-3 font-roboto text-sm font-medium">
            Learn more about security →
          </button>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-start gap-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-50">
        {icon}
      </div>

      <div>
        <h3 className="font-roboto text-lg font-bold text-black">{title}</h3>

        <p className="mt-2 font-roboto text-sm leading-6 text-gray-500">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default PaymentMethodsPage;
