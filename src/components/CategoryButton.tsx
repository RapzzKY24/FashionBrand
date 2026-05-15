type CategoryButtonProps = {
  title: string;
  active?: boolean;
  onClick?: () => void;
};

export const CategoryButton = ({
  title,
  active = false,
  onClick,
}: CategoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-sm min-w-[140px] transition-all duration-200
        ${
          active
            ? "bg-black text-white"
            : "bg-white outline outline-gray-400 text-black"
        }`}
    >
      <h1 className="text-center font-roboto text-[16px] font-bold">{title}</h1>
    </button>
  );
};
