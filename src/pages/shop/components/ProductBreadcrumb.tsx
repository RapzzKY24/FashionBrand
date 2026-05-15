import Link from "next/link";

type Props = {
  title: string;
};

export default function ProductBreadcrumb({ title }: Props) {
  return (
    <div className="flex items-center gap-2 text-sm font-roboto text-gray-400 uppercase tracking-[0.08em]">
      <Link href="/shop" className="hover:text-black transition">
        Shop
      </Link>
      <span>/</span>
      <span className="text-black font-medium">{title}</span>
    </div>
  );
}
