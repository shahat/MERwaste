import React from "react";
interface ButtonProps {
  text: string;
  onClick: (id:number) => void;
  className?: string;
  selected :boolean;
  id:number;
}
const SelectButton: React.FC<ButtonProps> = ({  onClick, selected , id  }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
      bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1] hover:cursor-pointer ${selected ? "border-[#0037C1] bg-[#0037C1] hover:!bg-[#002da1]" : ""} `}
    >
      <span>{selected ? "Selected" : "Select your skip"}</span>
      {!selected && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-right w-4 h-4"
      >
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
      )}
    </button>
  );
};

export default SelectButton;