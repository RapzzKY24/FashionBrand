import Link from "next/link";
import { ArrowRightIcon, EyeIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <section className="grid min-h-screen grid-cols-12 bg-white">
      <div className="col-span-6 flex flex-col justify-between bg-black p-12 text-white">
        <h1 className="font-barlow text-4xl font-extrabold uppercase tracking-[0.08em]">
          REFLECT
        </h1>

        <div>
          <p className="font-roboto text-sm uppercase tracking-[0.2em] text-white/50">
            Welcome Back
          </p>
          <h2 className="mt-4 max-w-xl font-barlow text-7xl font-extrabold uppercase leading-none">
            Minimal Streetwear For Modern Expression.
          </h2>
        </div>

        <p className="font-roboto text-sm text-white/50">
          © 2026 Reflect. All rights reserved.
        </p>
      </div>

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

          <form className="mt-10 space-y-6">
            <div>
              <label className="font-roboto text-sm">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none"
              />
            </div>

            <div>
              <label className="font-roboto text-sm">Password</label>
              <div className="relative mt-3">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="h-14 w-full rounded-md border border-gray-300 px-4 pr-12 font-roboto text-sm outline-none"
                />
                <EyeIcon
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 font-roboto text-sm text-gray-500">
                <input type="checkbox" className="h-4 w-4" />
                Remember me
              </label>

              <Link href="#" className="font-roboto text-sm text-black">
                Forgot password?
              </Link>
            </div>

            <button className="flex h-14 w-full items-center justify-center gap-3 rounded-md bg-black font-roboto text-sm uppercase tracking-[0.12em] text-white hover:bg-neutral-800">
              Login
              <ArrowRightIcon size={16} />
            </button>
          </form>

          <p className="mt-8 text-center font-roboto text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="font-medium text-black">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
