import { EyeIcon } from "lucide-react";

type PasswordFieldProps = {
  label: string;
  placeholder: string;
};

export const PasswordField = ({ label, placeholder }: PasswordFieldProps) => {
  return (
    <div>
      <label className="font-roboto text-sm text-black">{label}</label>

      <div className="relative mt-3">
        <input
          type="password"
          placeholder={placeholder}
          className="h-14 w-full rounded-md border border-gray-300 px-4 pr-12 font-roboto text-sm outline-none"
        />

        <EyeIcon
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
        />
      </div>
    </div>
  );
};
