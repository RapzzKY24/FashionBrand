type InfoItemProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export const InfoItem = ({ icon, title, desc }: InfoItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">{icon}</div>

      <div>
        <h3 className="font-roboto text-sm font-bold text-black">{title}</h3>
        <p className="font-roboto text-xs text-gray-500 mt-1">{desc}</p>
      </div>
    </div>
  );
};
