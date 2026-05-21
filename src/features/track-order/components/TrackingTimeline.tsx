import { TIMELINE_STEPS } from "../types/track-order.types";

type TrackingTimelineProps = {
  currentStatus: string;
};

const getStepStatus = (
  step: string,
  currentStatus: string
): "active" | "inactive" => {
  const stepIndex = TIMELINE_STEPS.indexOf(step as typeof TIMELINE_STEPS[number]);
  const statusIndex = TIMELINE_STEPS.indexOf(currentStatus as typeof TIMELINE_STEPS[number]);

  if (stepIndex <= statusIndex) return "active";
  return "inactive";
};

export const TrackingTimeline = ({ currentStatus }: TrackingTimelineProps) => {
  return (
    <div className="mt-14 flex items-center justify-between">
      {TIMELINE_STEPS.map((step, index) => {
        const active = getStepStatus(step, currentStatus) === "active";

        return (
          <div
            key={step}
            className="relative flex flex-1 flex-col items-center"
          >
            <div
              className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border ${
                active
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white"
              }`}
            >
              {active && (
                <div className="h-2 w-2 rounded-full bg-white" />
              )}
            </div>

            {index !== TIMELINE_STEPS.length - 1 && (
              <div
                className={`absolute left-1/2 top-4 h-px w-full ${
                  active ? "bg-black" : "bg-gray-300"
                }`}
              />
            )}

            <div className="mt-4 text-center">
              <p className="font-roboto text-xs font-medium uppercase">
                {step}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
