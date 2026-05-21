"use client";

type OrderTabsProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export const OrderTabs = ({ tabs, activeTab, onTabChange }: OrderTabsProps) => {
  return (
    <div className="flex items-center gap-10 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`pb-4 font-roboto text-sm uppercase tracking-[0.08em] transition ${
            tab === activeTab
              ? "border-b border-black text-black"
              : "text-gray-400 hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
