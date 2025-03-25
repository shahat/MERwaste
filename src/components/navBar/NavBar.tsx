import React from "react";
import NavBarBtn from "../reusableComponents/navBarBtn/NavBarBtn";
import { use } from "react";
import { SkipContext } from "../../context/SkipContext";
interface NavBarProps {
  size: number | undefined;
  price: number | undefined;
  duration: number | undefined;
}
const NavBar: React.FC<NavBarProps> = ({ size, price, duration }) => {
  const skipContext = use(SkipContext);
  if (!skipContext) {
    throw new Error("SkipList must be used within a SkipProvider");
  } 
  const { nextStep, prevStep } = skipContext;
  return (
    <section className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Info Section */}
        <section className="flex items-center gap-6">
          {size && <h3 className="font-medium">{size}</h3>}
          <div>
            <span className="text-2xl font-bold text-[#0037C1]">
              £{price} AV
            </span>
            <span className="text-sm text-gray-400 ml-2">
              {duration} hire days{" "}
            </span>
          </div>
        </section>
        {/* Buttons Section */}
        <section className="grid grid-cols-2 lg:flex gap-3 lg:gap-4 w-full lg:w-auto">
          <NavBarBtn
            onClick={prevStep}
            text="Back"
            className="bg-[#2a2a2a] hover:bg-[#3A3A3A] hover:cursor-pointer"
          />
          <NavBarBtn
            onClick={nextStep}
            text="Continue"
            className="bg-[#0037c1]  hover:bg-[#002da1] hover:cursor-pointer"
            icon={true}
          />
        </section>
      </div>
    </section>
  );
};

export default NavBar;
