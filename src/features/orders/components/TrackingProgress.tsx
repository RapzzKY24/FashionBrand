type TrackingProgressProps = {
  steps: string[];
  activeIndex: number;
  dates: string[];
};

export const TrackingProgress = ({ steps, activeIndex, dates }: TrackingProgressProps) => {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div
          key={step}
          className="relative flex flex-1 flex-col items-center"
        >
          <div
            className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border ${
              index <= activeIndex
                ? "border-black bg-black text-white"
                : "border-gray-300 bg-white"
            }`}
          >
            {index <= activeIndex && (
              <div className="h-2 w-2 rounded-full bg-white" />
            )}
          </div>

          {index !== steps.length - 1 && (
            <div
              className={`absolute left-1/2 top-4 h-px w-full ${
                index <= activeIndex - 1 ? "bg-black" : "bg-gray-300"
              }`}
            />
          )}

          <div className="mt-4 text-center">
            <p className="font-roboto text-xs font-medium uppercase">
              {step}
            </p>

            <p className="mt-1 font-roboto text-xs text-gray-500">
              {dates[index] ?? ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
