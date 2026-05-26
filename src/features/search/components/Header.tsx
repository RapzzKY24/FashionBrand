import { Reveal } from "@/src/animations";
import Link from "next/link";

const Header = ({
  query,
  totalItems,
}: {
  query?: string;
  totalItems?: number;
}) => {
  return (
    <Reveal>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 text-sm font-roboto text-gray-400 uppercase tracking-[0.08em]">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/search" className="hover:text-black transition">
            Search
          </Link>
          {query && (
            <>
              <span>/</span>
              <span className="text-black font-medium truncate max-w-48">
                {query}
              </span>
            </>
          )}
        </div>
        <h1 className="text-6xl font-barlow font-extrabold text-black uppercase tracking-[0.08rem]">
          {query ? `Results for "${query}"` : "Explore Our Product"}
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[16px] text-gray-400 font-roboto font-light ">
          {totalItems !== undefined
            ? `${totalItems} product${totalItems !== 1 ? "s" : ""} found`
            : "Explore refined silhouettes made for modern everyday wear."}
        </p>
      </div>
    </Reveal>
  );
};

export default Header;
