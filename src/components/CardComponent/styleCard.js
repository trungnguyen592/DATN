import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
  width: 200px;
  & img {
    geight: 200px;
    width: 200px;
  }
`;
export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 56, 61);
`;
export const WrapperReporText = styled.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  color: rgb(128, 128, 137);
  margin: 4px 0 1px;
`;

export const WrapperPriceText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: rgb(255, 66, 78);
`;

export const WrapperSalesText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: rgb(255, 66, 78);
`;

export const WrapperStyleTextSell = styled.span`
  color: rgb(120, 120, 120);
  font-size: 15px;
  line-height: 24px;
`;
