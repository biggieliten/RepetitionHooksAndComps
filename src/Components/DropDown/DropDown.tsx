import { useState } from "react";

const DropDown = ({ children }: any) => {
  const [option, setOption] = useState();

  const handleChange = (e: any) => {
    setOption(e.target.value);
  };

  return (
    <>
      <select onChange={handleChange} name="dropdown" id="">
        {children}
      </select>

      <div>{option}</div>
    </>
  );
};

export default DropDown;
