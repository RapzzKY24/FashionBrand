type Props = {
  category: string;
  title: string;
  price: number;
};

export default function ProductInfo({ category, title, price }: Props) {
  return (
    <div className="space-y-3">
      <p className="font-roboto text-gray-400 uppercase text-sm tracking-[0.12em]">
        {category}
      </p>

      <h1 className="font-barlow font-extrabold text-black uppercase text-[52px] leading-[0.95] tracking-[0.02em]">
        {title}
      </h1>

      <p className="font-roboto font-semibold text-black text-2xl tracking-wide">
        {price}
      </p>

      <p className="max-w-lg text-[15px] leading-7 font-light text-gray-500 font-roboto">
        Minimal hoodie crafted from heavyweight cotton blend. Relaxed fit with
        timeless silhouette.
      </p>
    </div>
  );
}
