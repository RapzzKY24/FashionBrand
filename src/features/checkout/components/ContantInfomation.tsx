import { PencilIcon } from "lucide-react";
import React from "react";
import { Profile } from "../types/checkout.types";

const ContantInfomation = ({ profile }: { profile: Profile }) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-7">
      <div className="flex items-center justify-between">
        <h2 className="font-roboto text-sm font-bold uppercase tracking-[0.18em]">
          1. Contact Information
        </h2>

        <button className="flex h-10 items-center gap-2 rounded-md border border-gray-300 px-5 font-roboto text-sm">
          <PencilIcon size={15} />
          Edit
        </button>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-6">
        <div>
          <p className="font-roboto text-xs text-gray-500">Full Name</p>
          <h3 className="mt-2 font-roboto text-sm font-medium">
            {profile.name}
          </h3>
        </div>

        <div>
          <p className="font-roboto text-xs text-gray-500">Email</p>
          <h3 className="mt-2 font-roboto text-sm font-medium">
            {profile.email}
          </h3>
        </div>

        <div>
          <p className="font-roboto text-xs text-gray-500">Phone Number</p>
          <h3 className="mt-2 font-roboto text-sm font-medium">-</h3>
        </div>
      </div>
    </div>
  );
};

export default ContantInfomation;
