type SummaryRowProps = {
  label: string;
  value: string;
};

export const SummaryRow = ({ label, value }: SummaryRowProps) => {
  return (
    <div className="border-b border-gray-200 pb-5 last:border-b-0">
      <p className="font-roboto text-sm text-gray-500">{label}</p>
      <p className="mt-2 font-roboto text-sm text-black">{value}</p>
    </div>
  );
};
