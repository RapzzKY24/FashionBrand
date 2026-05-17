import Link from "next/link";
import { LoginForm } from "./loginForm";

export const LoginContent = () => {
  return (
    <div className="col-span-6 flex items-center justify-center px-20">
      <div className="w-full max-w-md">
        <p className="font-roboto text-sm uppercase tracking-[0.18em] text-gray-400">
          / Login
        </p>

        <h1 className="mt-3 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
          Sign In
        </h1>

        <p className="mt-3 font-roboto text-sm text-gray-500">
          Enter your account details to continue.
        </p>

        <LoginForm />

        <p className="mt-8 text-center font-roboto text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="font-medium text-black">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};
