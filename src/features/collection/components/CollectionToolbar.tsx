import { Grid2X2Icon, LayoutListIcon } from "lucide-react";

export const CollectionsToolbar = () => {
  return (
    <div className="mb-7 flex items-center justify-between">
      <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.12em]">
        6 Collections
      </h2>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <span className="font-roboto text-xs font-bold uppercase">
            Sort By:
          </span>

          <select className="bg-transparent font-roboto text-sm outline-none">
            <option>Featured</option>
            <option>Newest First</option>
            <option>Best Selling</option>
          </select>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-black text-white">
          <Grid2X2Icon size={18} />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300">
          <LayoutListIcon size={18} />
        </button>
      </div>
    </div>
  );
};
