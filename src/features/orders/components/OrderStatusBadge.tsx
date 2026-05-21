type OrderStatusBadgeProps = {
  status: string;
};

export const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
  return (
    <span
      className={`rounded-full px-4 py-2 font-roboto text-xs ${
        status.toLowerCase() === "delivered"
          ? "bg-gray-100 text-black"
          : status.toLowerCase() === "cancelled"
            ? "bg-red-50 text-red-500"
            : "bg-black text-white"
      }`}
    >
      {status}
    </span>
  );
};
