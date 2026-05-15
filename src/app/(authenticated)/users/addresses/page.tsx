import {
  ClockIcon,
  EditIcon,
  MapPinIcon,
  PlusIcon,
  ShieldCheckIcon,
  Trash2Icon,
  BoxIcon,
} from "lucide-react";

const addresses = [
  {
    title: "Home",
    name: "Jason Dev.",
    address: ["123 Street Name", "Los Angeles, CA 90001", "United States"],
    phone: "+1 (555) 123-4567",
    default: true,
  },
  {
    title: "Office",
    name: "Jason Dev.",
    address: [
      "456 Business Ave, Suite 12",
      "New York, NY 10001",
      "United States",
    ],
    phone: "+1 (555) 987-6543",
  },
  {
    title: "Parents House",
    name: "Jason Dev.",
    address: ["789 Family Rd", "Chicago, IL 60601", "United States"],
    phone: "+1 (555) 456-7890",
  },
  {
    title: "Vacation Home",
    name: "Jason Dev.",
    address: ["321 Ocean Drive", "Miami, FL 33101", "United States"],
    phone: "+1 (555) 321-0987",
  },
  {
    title: "London Address",
    name: "Jason Dev.",
    address: ["12 King’s Road", "London, SW3 4XX", "United Kingdom"],
    phone: "+44 20 7123 4567",
  },
];

const AddressesPage = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 font-roboto text-sm text-gray-400">
            <span>Home</span>
            <span>/</span>
            <span className="text-black">Addresses</span>
          </div>

          <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
            Addresses
          </h1>

          <p className="mt-3 font-roboto text-sm text-gray-500">
            Manage your saved addresses for a faster and easier checkout.
          </p>
        </div>

        <button className="flex h-12 items-center gap-3 rounded-md bg-black px-6 font-roboto text-sm uppercase tracking-[0.08em] text-white hover:bg-neutral-800">
          <PlusIcon size={16} />
          Add New Address
        </button>
      </div>

      <div className="h-px bg-gray-200" />

      <div>
        <h2 className="font-roboto text-lg font-bold text-black">
          Saved Addresses
        </h2>

        <div className="mt-6 grid grid-cols-3 gap-6">
          {addresses.map((item) => (
            <div
              key={item.title}
              className={`rounded-md border bg-white p-6 ${
                item.default ? "border-black" : "border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  {item.default && (
                    <span className="mb-5 inline-block rounded-sm bg-black px-3 py-1 font-roboto text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                      Default
                    </span>
                  )}

                  <h3 className="font-roboto text-xl font-bold text-black">
                    {item.title}
                  </h3>
                </div>

                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    item.default ? "border-black" : "border-gray-300"
                  }`}
                >
                  {item.default && (
                    <div className="h-3 w-3 rounded-full bg-black" />
                  )}
                </div>
              </div>

              <div className="mt-6 space-y-1 font-roboto text-sm leading-6 text-black">
                <p>{item.name}</p>
                {item.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p>{item.phone}</p>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-5 flex items-center justify-between">
                <button className="flex items-center gap-2 font-roboto text-sm hover:text-gray-500">
                  <EditIcon size={16} />
                  Edit
                </button>

                <button className="flex items-center gap-2 font-roboto text-sm hover:text-red-500">
                  <Trash2Icon size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md bg-gray-50 px-6 py-6">
        <div className="flex items-center gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white">
            <MapPinIcon size={22} />
          </div>

          <div>
            <h3 className="font-roboto text-sm font-bold">
              Set a default address
            </h3>

            <p className="mt-1 font-roboto text-sm text-gray-500">
              Your default address will be used automatically during checkout.
            </p>
          </div>
        </div>

        <button className="h-12 rounded-md border border-gray-300 bg-white px-8 font-roboto text-sm font-bold uppercase tracking-[0.08em] hover:bg-gray-100">
          Manage Default Address
        </button>
      </div>

      <div>
        <h2 className="font-roboto text-lg font-bold text-black">
          Address Tips
        </h2>

        <div className="mt-5 grid grid-cols-3 gap-6">
          <TipCard
            icon={<ShieldCheckIcon size={24} />}
            title="Use a valid address"
            desc="Ensure your address is accurate to avoid delivery issues."
          />

          <TipCard
            icon={<BoxIcon size={24} />}
            title="Add multiple addresses"
            desc="Save home, office, and other addresses for convenience."
          />

          <TipCard
            icon={<ClockIcon size={24} />}
            title="Update when needed"
            desc="Keep your address up to date for smooth deliveries."
          />
        </div>
      </div>
    </section>
  );
};

const TipCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-start gap-4 border-r border-gray-200 last:border-r-0">
      <div>{icon}</div>

      <div>
        <h3 className="font-roboto text-sm font-bold text-black">{title}</h3>
        <p className="mt-1 font-roboto text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default AddressesPage;
