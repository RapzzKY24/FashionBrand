import { Address } from "../types/checkout.types";

type Props = {
  address?: Address;
  onChangeAddress: () => void;
};

export const ShippingAddress = ({ address, onChangeAddress }: Props) => {
  if (!address) {
    return (
      <div className="rounded-md border border-gray-200 bg-white p-7">
        <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
          2. Shipping Address
        </h2>

        <button className="mt-5 h-12 rounded-md border border-black px-6 font-roboto text-sm font-medium">
          Add New Address
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-gray-200 bg-white">
      <div className="border-b border-gray-200 p-7">
        <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
          2. Shipping Address
        </h2>
        <p className="mt-2 font-roboto text-sm text-gray-500">
          Your selected shipping address
        </p>
      </div>

      <div className="p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="flex items-center gap-3">
              {address.is_primary && (
                <span className="rounded bg-gray-100 px-3 py-1 font-roboto text-xs">
                  Default
                </span>
              )}

              <h3 className="font-roboto text-sm font-bold">
                {address.recipient_name}
              </h3>
            </div>

            <div className="mt-3 space-y-1 font-roboto text-sm leading-6">
              <p>{address.full_address}</p>
              <p>
                {address.district}, {address.city}
              </p>
              <p>
                {address.province} {address.postal_code}
              </p>
              <p>{address.phone_number}</p>
            </div>
          </div>

          <button
            onClick={onChangeAddress}
            className="h-10 rounded-md border border-gray-300 px-5 font-roboto text-sm"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
};
