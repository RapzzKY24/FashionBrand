import Link from "next/link";
import { RegisterForm } from "./registerForm";

export const RegisterContent = () => {
  return (
    <div className="col-span-6 flex items-center justify-center px-20">
      <div className="w-full max-w-md">
        <p className="font-roboto text-sm uppercase tracking-[0.18em] text-gray-400">
          / Register
        </p>

        <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
          Create Account
        </h1>

        <p className="mt-3 font-roboto text-sm text-gray-500">
          Join Reflect and start building your wardrobe.
        </p>

        <RegisterForm />

        <p className="mt-8 text-center font-roboto text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium text-black">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
