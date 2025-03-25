import React from "react";
import { SkipData } from "../../types/skipTypes";
import SelectButton from "../reusableComponents/selectbutton/SelectButton";

interface SkipCardProps {
  data: SkipData;
  selectCard: (id: number) => void;
  selectedCardId: number | null;
}

const SkipCard: React.FC<SkipCardProps> = ({
  data,
  selectCard,
  selectedCardId,
}) => {
  return (
    <div
      className={`group relative rounded-lg border-2 p-4 md:p-6 transition-all
  border-[#2A2A2A] hover:border-[#0037C1]/50
  bg-[#1C1C1C] text-white cursor-pointer ${
    selectedCardId === data.id && "border-[#0037C1]"
  }`}
      onClick={() => selectCard(data.id)}
    >
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
          alt="4 Yard Skip"
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
        />
        {/* ======= card padge ====== */}
        <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
          {data.size} Yards
        </div>
        {data.size  > 9 && (
          <div className="absolute bottom-3 left-2 z-20 space-y-2">
            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
              <span className="text-xs font-medium text-yellow-500">
                Private Property Only
              </span>
            </div>
          </div>
        )}
      </div>
      <h3 className="text-start text-lg md:text-xl font-bold mb-2 text-white">
        {data.size} Yard Skip
      </h3>
      <p className="text-start text-sm text-gray-400 mb-4 md:mb-6 ">
        14 day hire period
      </p>
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
            £{data.price_before_vat.toFixed(2)}{" "}
          </span>
          <span className="text-sm text-gray-400 ml-2">per week</span>
        </div>
      </div>
      <SelectButton
        text="Select"
        className="mt-4"
        onClick={() => selectCard(data.id)}
        selected={selectedCardId === data.id}
        id={data.id}
      />
    </div>
  );
};

export default SkipCard;
