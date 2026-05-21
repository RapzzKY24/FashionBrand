type FieldProps = {
  label: string;
  defaultValue: string;
};

export const Field = ({ label, defaultValue }: FieldProps) => {
  return (
    <div>
      <label className="font-roboto text-sm text-black">{label}</label>
      <input
        type="text"
        defaultValue={defaultValue}
        className="mt-3 h-14 w-full rounded-md border border-gray-300 px-4 font-roboto text-sm outline-none"
      />
    </div>
  );
};
