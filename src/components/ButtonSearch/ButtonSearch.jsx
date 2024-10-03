import React from "react";
import ButtonComponents from "../ButtonComponents/ButtonComponents";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponents/InputConponent";
const ButtonSearch = (props) => {
  const { size, placeholder, textButton, bordered } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: "#fff", borderRadius: 0 }}
      />
      <ButtonComponents
        size={size}
        styleButton={{
          background: "rgb(13,92,182)",
          border: !bordered && "none",
          borderRadius: 0,
        }}
        icon={<SearchOutlined color={"#fff"} style={{ color: "#fff" }} />}
        textButton={textButton}
        styletextButton={{ color: "#fff" }}
      />
    </div>
  );
};

export default ButtonSearch;
