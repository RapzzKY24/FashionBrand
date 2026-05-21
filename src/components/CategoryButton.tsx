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
      className={`group relative overflow-hidden rounded-sm min-w-[140px] border px-4 py-3 transition-colors duration-200
        ${
          active
            ? "bg-black text-white border-black"
            : "bg-white text-black border-gray-400 hover:border-black"
        }`}
    >
      <span className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
      <h1 className="relative z-10 text-center font-roboto text-[16px] font-bold group-hover:text-white transition-colors duration-200">
        {title}
      </h1>
    </button>
  );
};
