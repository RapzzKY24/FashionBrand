type ShippingAddressProps = {
  recipientName: string;
  street: string;
  cityState: string;
  country: string;
  phone: string;
};

export const ShippingAddress = ({
  recipientName,
  street,
  cityState,
  country,
  phone,
}: ShippingAddressProps) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-6">
      <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
        Shipping Address
      </h2>

      <div className="mt-6 space-y-2 font-roboto text-sm">
        <p className="font-bold">{recipientName}</p>
        <p className="text-gray-500">{street}</p>
        <p className="text-gray-500">{cityState}</p>
        <p className="text-gray-500">{country}</p>
        <p className="text-gray-500">{phone}</p>
      </div>

      <button className="mt-6 h-11 w-full rounded-md border border-gray-300 font-roboto text-sm hover:bg-gray-50">
        View or Edit Address
      </button>
    </div>
  );
};
