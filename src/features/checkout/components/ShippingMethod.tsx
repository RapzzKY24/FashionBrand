export const ShippingMethod = () => {
  return (
    <div className="rounded-md border border-gray-200 bg-white">
      <div className="border-b border-gray-200 p-7">
        <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
          3. Shipping Method
        </h2>
      </div>

      <div className="flex items-center justify-between p-7">
        <div className="flex items-center gap-5">
          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-black">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
          </div>

          <div>
            <h3 className="font-roboto text-sm font-bold">Standard Shipping</h3>
            <p className="mt-1 font-roboto text-sm text-gray-500">
              Est. 2-4 business days
            </p>
          </div>
        </div>

        <p className="font-roboto text-sm font-bold">Rp 15.000</p>
      </div>
    </div>
  );
};
