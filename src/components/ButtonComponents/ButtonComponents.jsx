import React from "react";
import { Button } from "antd";

const ButtonComponents = ({
  size,
  styletextButton,
  styleButton,
  textButton,
  ...rests
}) => {
  return (
    <Button size={size} style={styleButton} {...rests}>
      <span style={styletextButton}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponents;
