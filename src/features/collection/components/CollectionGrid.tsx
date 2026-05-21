import { collections } from "../data/collection";
import { CollectionCard } from "./CollectionCard";

export const CollectionGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {collections.map((item) => (
        <CollectionCard key={item.title} item={item} />
      ))}
    </div>
  );
};
