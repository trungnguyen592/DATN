import React from "react";
import HeaderConponent from "../Header/HeaderConponent";

const DefaultComponent = ({ children }) => {
  return (
    <div>
      <HeaderConponent />
      {children}
    </div>
  );
};

export default DefaultComponent;
