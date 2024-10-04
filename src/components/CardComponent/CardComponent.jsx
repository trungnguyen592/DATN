import React from "react";
import {
  StyleNameProduct,
  WrapperPriceText,
  WrapperReporText,
  WrapperSalesText,
  WrapperCardStyle,
} from "./styleCard";
import { StarOutlined } from "@ant-design/icons";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      style={{ width: 200 }}
      headStyle={{ width: "200pxx", height: "200px" }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReporText>
        <span style={{ marginRight: "4px" }}>
          <span>4.5 </span>
          <StarOutlined style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <span> | Sold 1000+</span>
      </WrapperReporText>
      <WrapperPriceText>
        19.999.999d
        <WrapperSalesText>-15%</WrapperSalesText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
