import React from "react";
import {
  WrapperLableText,
  WrapperTextValue,
  WrapperContent,
  WrapperTextPrice,
} from "./styleNavbar";
import { Checkbox, Rate } from "antd";

const NavbarComponent = () => {
  const onChange = () => {};
  const rederContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option, index) => {
          return <WrapperTextValue key={index}>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => {
              return (
                <Checkbox style={{ marginLeft: 0 }} value={option.value}>
                  {option.label}
                </Checkbox>
              );
            })}
            <Checkbox value="B">B</Checkbox>
          </Checkbox.Group>
        );
      case "star":
        return options.map((option, index) => {
          return (
            <>
              <div style={{ display: "flex" }}>
                <Rate
                  key={index}
                  style={{ fontSize: "12px" }}
                  disabled
                  defaultValue={option}
                />
                <span>{`tu ${option} sao`}</span>
              </div>
            </>
          );
        });
      case "price":
        return options.map((option) => {
          return <WrapperTextPrice>{option}</WrapperTextPrice>;
        });
      default:
        return {};
    }
  };

  return (
    <div>
      <WrapperLableText>Label</WrapperLableText>
      <WrapperContent>
        {rederContent("text", ["TV", "Tu Lanh", "May Giat"])}
      </WrapperContent>
      <WrapperContent>
        {rederContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
      </WrapperContent>
      <WrapperContent>{rederContent("star", [3, 4, 5])}</WrapperContent>
      <WrapperContent>
        {rederContent("price", ["duoi 4.000.000", "tren 4.000.000"])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
