import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center gap-y-2">
      <div className="flex items-center gap-2 font-roboto text-sm">
        <Link href="/home">Home</Link>
        <span>/</span>
        <span>Shop</span>
      </div>
      <h1 className="text-6xl font-barlow font-extrabold text-black uppercase tracking-[0.08rem]">
        SHOP
      </h1>
      <div className="flex justify-between items-center">
        <p className="text-[16px] text-gray-400 font-roboto font-light ">
          Minimal Silhouettes Crafted For Everyday Expression.
        </p>
        <div className="flex items-center gap-24">
          <select
            defaultValue="newest"
            className="bg-transparent text-sm uppercase text-gray-500 font-roboto outline-none cursor-pointer"
          >
            <option value="newest">Sort by : Newest</option>
            <option value="oldest">Sort by : Oldest</option>
            <option value="price-low">Price : Low to High</option>
            <option value="price-high">Price : High to Low</option>
            <option value="name-az">Name : A - Z</option>
            <option value="name-za">Name : Z - A</option>
          </select>

          <p className="text-sm uppercase text-gray-500 font-roboto">
            24 products
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
