import React from "react";

type Props = {
  value: string;
  onClick: () => void;
  width?: string;
  height?: string;
  color?: string;
  bgColor?: string;
};

export const Button = ({
  value,
  onClick,
  width,
  height,
  color,
  bgColor,
}: Props) => {
  return (
    <button className="bg-red-200 text-white" onClick={onClick}>
      {value}
    </button>
  );
};
