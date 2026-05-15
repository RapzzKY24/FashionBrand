import { ArrowRightIcon } from "lucide-react";
import React from "react";

const SubcsribeLetter = () => {
  return (
    <section className="px-16 py-6 overflow-hidden w-full pt-20 pb-30">
      <div className="bg-gray-200 flex flex-col items-center justify-center h-full px-6 py-20 rounded-2xl gap-y-4">
        <h1 className="font-extrabold font-barlow text-[7rem] uppercase">
          Subscribe Our Newslatter
        </h1>
        <p className="font-light font-roboto text-[16px] text-center max-w-4xl">
          Stay connected with the latest trends, exclusive offers, and
          behind-the-scenes updates by subscribing to our newsletter. Be the
          first to discover new collections and special promotions tailored just
          for you!
        </p>
        <div className="relative w-[30%] pt-10">
          <input
            type="text"
            placeholder="Enter Your Email Address Here"
            className="w-full px-4 py-6 pr-14 bg-black text-white rounded-md font-medium placeholder:text-white/60 outline-none"
          />

          <ArrowRightIcon
            className="absolute right-4 bottom-4 -translate-y-1/2 text-white"
            size={22}
          />
        </div>
      </div>
    </section>
  );
};

export default SubcsribeLetter;
