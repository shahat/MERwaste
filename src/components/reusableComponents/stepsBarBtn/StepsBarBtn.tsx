import React from "react";

interface Step {
  label: string;
  icon: React.ReactNode;
}

interface StepBarProps {
  steps: Step[];
  currentStep: number | 0;
}

const StepBar: React.FC<StepBarProps> = ({ steps, currentStep }) => {
  return (
    <div
      className="flex items-center justify-between   text-white w-full max-w-[1180px] overflow-x-auto gap-4  
      px-4 md:px-8"
    >
      {steps.map((step, index) => (
        <>
          {/* button */}
          <div
            key={index}
            className={`flex items-center space-x-2  ${
              index <= currentStep ? "text-blue-500 hover:cursor-pointer" : "text-gray-500 hover:cursor-not-allowed"
            }` }
          >
            {step.icon}
            <span
              className={`flex items-center space-x-2 whitespace-nowrap ${
                index <= currentStep ? "text-white" : ""
              }`}
            >
              {step.label}
            </span>
          </div>
          {/* spacer line */}
          {index < steps.length - 1 && (
            <span key={`spacer-${index}`} className=" bg-gray-500 block h-[1px] min-w-[36px] md:min-w-[64px] whitespace-nowrap"></span>
          )}
        </>
      ))}
    </div>
  );
};
export default StepBar;
