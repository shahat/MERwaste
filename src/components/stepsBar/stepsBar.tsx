import React, { use } from "react";
import StepsBarBtn from "../reusableComponents/stepsBarBtn/StepsBarBtn";
import { FaMapMarkerAlt, FaTrash, FaTruck, FaShieldAlt, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import { SkipContext } from "../../context/SkipContext";
const StepsBar: React.FC = () => {
  const skipContext = use(SkipContext);
  if (!skipContext) {
    throw new Error("SkipList must be used within a SkipProvider");
  }
  const { currentStep } = skipContext;

  const steps = [
    { label: "Postcode", icon: <FaMapMarkerAlt /> },
    { label: "Waste Type", icon: <FaTrash /> },
    { label: "Select Skip", icon: <FaTruck /> },
    { label: "Permit Check", icon: <FaShieldAlt /> },
    { label: "Choose Date", icon: <FaCalendarAlt /> },
    { label: "Payment", icon: <FaCreditCard /> },
  ];

  return (
    <div className=" flex flex-col items-center justify-center ">
      <StepsBarBtn steps={steps} currentStep = {currentStep} />
    </div>
  );
};

export default StepsBar;


// <button
// className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
// onClick={() => setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev))}
// >
// Next Step
// </button>