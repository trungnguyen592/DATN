import React from "react";
import {
  StyleNameProduct,
  WrapperPriceText,
  WrapperReporText,
  WrapperSalesText,
  WrapperCardStyle,
  WrapperStyleTextSell,
} from "./styleCard";
import { StarFilled } from "@ant-design/icons";

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
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
        </span>
        <WrapperStyleTextSell> | Sold 1000+</WrapperStyleTextSell>
      </WrapperReporText>
      <WrapperPriceText>
        <span style={{ marginRight: "8px" }}>19.999.999d</span>
        <WrapperSalesText>-15%</WrapperSalesText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
