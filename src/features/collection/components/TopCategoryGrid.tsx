import { topCategories } from "../data/collection";
import { TopCategoryCard } from "./TopCategoryCard";

export const TopCategoryGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-3 px-16 py-5">
      {topCategories.map((item) => (
        <TopCategoryCard key={item.title} item={item} />
      ))}
    </div>
  );
};
