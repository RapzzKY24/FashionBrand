import { Address } from "../types/checkout.types";

type AddressModalProps = {
  open: boolean;
  addresses: Address[];
  selectedAddressId: string;
  onSelectAddress: (id: string) => void;
  onClose: () => void;
};

export const AddressModal = ({
  open,
  addresses,
  selectedAddressId,
  onSelectAddress,
  onClose,
}: AddressModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-2xl rounded-md bg-white">
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
            Select Address
          </h2>

          <button onClick={onClose} className="font-roboto text-sm">
            Close
          </button>
        </div>

        <div className="max-h-[500px] overflow-y-auto px-6">
          {addresses.map((address) => {
            const active = selectedAddressId === address.id;

            return (
              <button
                key={address.id}
                onClick={() => onSelectAddress(address.id)}
                className="grid w-full grid-cols-12 gap-5 border-b border-gray-200 py-5 text-left last:border-b-0"
              >
                <div className="col-span-1 pt-1">
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                      active ? "border-black" : "border-gray-300"
                    }`}
                  >
                    {active && (
                      <span className="h-2.5 w-2.5 rounded-full bg-black" />
                    )}
                  </div>
                </div>

                <div className="col-span-11">
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
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
