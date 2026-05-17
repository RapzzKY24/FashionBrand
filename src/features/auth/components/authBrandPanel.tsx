type Props = {
  subtitle: string;
  heading: string;
  footer: string;
};

export const AuthBrandPanel = ({ subtitle, heading, footer }: Props) => {
  return (
    <div className="col-span-6 flex flex-col justify-between bg-black p-12 text-white">
      <h1 className="font-barlow text-4xl font-extrabold uppercase tracking-[0.08em]">
        REFLECT
      </h1>

      <div>
        <p className="font-roboto text-sm uppercase tracking-[0.2em] text-white/50">
          {subtitle}
        </p>

        <h2 className="mt-4 max-w-xl font-barlow text-7xl font-extrabold uppercase leading-none">
          {heading}
        </h2>
      </div>

      <p className="font-roboto text-sm text-white/50">{footer}</p>
    </div>
  );
};
