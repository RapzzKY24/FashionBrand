import { filters, sortBy } from "../data/collection";
import { FilterGroup } from "./FilterGroup";

export const CollectionsSidebar = () => {
  return (
    <aside className="col-span-2 border-r border-gray-200 px-16 py-8">
      <div className="space-y-8">
        <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.12em]">
          Filters
        </h2>

        <FilterGroup title="Category" type="checkbox" items={filters} />
        <FilterGroup title="Sort By" type="radio" items={sortBy} />
      </div>
    </aside>
  );
};
