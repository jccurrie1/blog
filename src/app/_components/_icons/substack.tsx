import React from "react";

interface SubstackIconProps {
  className?: string;
  size?: number;
}

const SubstackIcon: React.FC<SubstackIconProps> = ({
  className = "",
  size = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4h16" />
      <path d="M4 8h16" />
      <path d="M4 12l8 6 8-6" />
    </svg>
  );
};

export default SubstackIcon;
