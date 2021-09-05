import React from "react";

type Props = {
  value: string;
  width?: string;
  height?: string;
  onChange: () => void;
};

export const Input = ({ value, width, height, onChange }: Props) => {
  return (
    <>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
};
