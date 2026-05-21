import Link from "next/link";
export const CartHeader = () => {
  return (
    <div className="flex flex-col justify-center gap-y-2.5">
      <div className="flex items-center gap-2 text-sm font-roboto text-gray-400 uppercase tracking-[0.08em]">
        <Link href="/" className="hover:text-black transition">
          Home
        </Link>
        <span>/</span> <span className="text-black font-medium">CART</span>
      </div>
      <h1 className="text-6xl font-barlow font-extrabold text-black uppercase tracking-[0.08rem]">
        Your Cart
      </h1>
      <p className="text-[16px] text-gray-500 font-roboto font-light">
        Review your selected items before checkout.
      </p>
    </div>
  );
};
