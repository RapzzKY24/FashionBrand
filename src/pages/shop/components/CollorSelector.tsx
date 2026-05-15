export default function ColorSelector() {
  const colors = [
    "bg-gray-700",
    "bg-black",
    "bg-lime-900",
    "bg-gray-300",
    "bg-neutral-100",
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium font-roboto uppercase tracking-[0.08em]">
        Color : Charcoal
      </h2>

      <div className="flex items-center gap-5">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`w-9 h-9 ${color} rounded-full transition ${
              index === 0
                ? "ring-2 ring-black ring-offset-2"
                : "ring-1 ring-black/10 hover:scale-105"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
