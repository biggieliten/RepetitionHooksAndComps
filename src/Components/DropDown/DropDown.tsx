import { useState } from "react";
type DropDownProps = {
  children: any;
  name: string;
  value: any;
  onChange: any;
};
const DropDown = ({ onChange, value, name, children }: DropDownProps) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      {children}
    </select>
  );
};

export default DropDown;
