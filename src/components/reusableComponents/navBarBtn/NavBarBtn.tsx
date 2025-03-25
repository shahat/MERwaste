import React from "react";
interface ButtonProps {
  onClick?: () => void;
  text: string;
  className?: string;
  icon?: boolean;
}
const NavBarBtn: React.FC<ButtonProps> = ({
  onClick,
  text,
  className,
  icon,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 w-full lg:w-auto rounded px-4 py-2  leading-6  ${className}`}
      onClick={onClick}
    >
      {text}
      {icon && (
        <span className="flex items-center">  <svg
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
      </svg></span>
      )}
    </button>
  );
};
export default NavBarBtn;
