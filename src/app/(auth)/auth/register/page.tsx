import Link from "next/link";
import { ArrowRightIcon, EyeIcon } from "lucide-react";

const RegisterPage = () => {
  return (
    <section className="grid min-h-screen grid-cols-12 bg-white">
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

          <form className="mt-10 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-roboto text-sm">First Name</label>
                <input
                  type="text"
                  placeholder="Jason"
                  className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none"
                />
              </div>

              <div>
                <label className="font-roboto text-sm">Last Name</label>
                <input
                  type="text"
                  placeholder="Dev."
                  className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none"
                />
              </div>
            </div>

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
                  placeholder="Create password"
                  className="h-14 w-full rounded-md border border-gray-300 px-4 pr-12 font-roboto text-sm outline-none"
                />
                <EyeIcon
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            <label className="flex items-start gap-3 font-roboto text-sm text-gray-500">
              <input type="checkbox" className="mt-1 h-4 w-4" />I agree to the
              Terms & Conditions and Privacy Policy.
            </label>

            <button className="flex h-14 w-full items-center justify-center gap-3 rounded-md bg-black font-roboto text-sm uppercase tracking-[0.12em] text-white hover:bg-neutral-800">
              Create Account
              <ArrowRightIcon size={16} />
            </button>
          </form>

          <p className="mt-8 text-center font-roboto text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-medium text-black">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div className="col-span-6 flex flex-col justify-between bg-black p-12 text-white">
        <h1 className="font-barlow text-4xl font-extrabold uppercase tracking-[0.08em]">
          REFLECT
        </h1>

        <div>
          <p className="font-roboto text-sm uppercase tracking-[0.2em] text-white/50">
            New Collection
          </p>
          <h2 className="mt-4 max-w-xl font-barlow text-7xl font-extrabold uppercase leading-none">
            Join The Modern Streetwear Movement.
          </h2>
        </div>

        <p className="font-roboto text-sm text-white/50">
          Minimal silhouettes crafted for everyday expression.
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
