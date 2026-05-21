import Link from "next/link";
import React from "react";

const HeaderBreadcrumb = () => {
  return (
    <div className="flex flex-col justify-center mb-2 gap-y-4">
      <div className="flex items-center gap-2 text-sm font-roboto text-gray-400 uppercase tracking-[0.08em]">
        <Link href="/" className="hover:text-black transition">
          Home
        </Link>
        <span>/</span>
        <Link href="/cart" className="hover:text-black transition">
          Cart
        </Link>
        <span>/</span>
        <span className="text-black font-medium">Checkout</span>
      </div>
      <h1 className="text-6xl font-barlow font-extrabold text-black uppercase tracking-[0.08rem]">
        Checkout
      </h1>
      <p className="text-[16px] text-gray-500 font-roboto font-light">
        Review Your Order and Complete your purchase.
      </p>
    </div>
  );
};

export default HeaderBreadcrumb;
