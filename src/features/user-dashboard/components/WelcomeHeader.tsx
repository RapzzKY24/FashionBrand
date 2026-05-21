type WelcomeHeaderProps = {
  name: string;
};

export const WelcomeHeader = ({ name }: WelcomeHeaderProps) => {
  return (
    <div>
      <p className="font-roboto text-sm text-black">
        Welcome back, {name}! 👋
      </p>

      <h1 className="mt-2 font-barlow text-6xl font-extrabold uppercase tracking-[0.04em] text-black">
        Overview
      </h1>

      <p className="mt-2 font-roboto text-sm text-gray-500">
        Here&apos;s what&apos;s happening with your account today.
      </p>
    </div>
  );
};
