type PreferenceProps = {
  label: string;
  active?: boolean;
};

export const Preference = ({ label, active }: PreferenceProps) => {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="font-roboto text-sm">{label}</span>

      <button
        className={`relative h-6 w-11 rounded-full transition ${
          active ? "bg-black" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            active ? "right-1" : "left-1"
          }`}
        />
      </button>
    </div>
  );
};
