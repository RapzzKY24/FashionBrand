"use client";

import { ArrowRightIcon, EyeIcon } from "lucide-react";
import { useActionState, useEffect } from "react";
import { registerAction } from "../actions/authAction";
import { toast } from "sonner";

export const RegisterForm = () => {
  const [state, formAction] = useActionState(registerAction, undefined);

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form className="mt-10 space-y-5" action={formAction}>
      <div>
        <label className="font-roboto text-sm">Full Name</label>

        <input
          name="name"
          type="text"
          placeholder="Jason Dev"
          required
          className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none transition focus:border-black"
        />
      </div>

      <div>
        <label className="font-roboto text-sm">Email Address</label>

        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none transition focus:border-black"
        />
      </div>

      <div>
        <label className="font-roboto text-sm">Password</label>

        <div className="relative mt-3">
          <input
            name="password"
            type="password"
            placeholder="Create password"
            required
            className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 pr-12 font-roboto text-sm outline-none transition focus:border-black"
          />

          <EyeIcon
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      <label className="flex items-start gap-3 font-roboto text-sm text-gray-500">
        <input type="checkbox" className="mt-1 h-4 w-4" />I agree to the Terms &
        Conditions and Privacy Policy.
      </label>

      <button
        type="submit"
        className="flex h-14 w-full items-center justify-center gap-3 rounded-md bg-black font-roboto text-sm uppercase tracking-[0.12em] text-white transition hover:bg-neutral-800"
      >
        Create Account
        <ArrowRightIcon size={16} />
      </button>
    </form>
  );
};
