import React, { useState } from "react";
import { WrapperInputStyle } from "./style";

const InputForm = ({ placeholder, ...rests }) => {
  const [valueInput, setValueInput] = useState("");
  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <WrapperInputStyle
      placeholder={placeholder}
      value={valueInput}
      onChange={handleChange}
      {...rests}
    />
  );
};

export default InputForm;
