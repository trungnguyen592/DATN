import React from "react";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
} from "./style";
import { Badge, Col } from "antd";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

function HeaderComponent() {
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(26,148,255",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>IE-Commerce</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButtonSearch
            placeholder="IE-Commerce bao ship 0Đ - Đăng ký ngay!"
            textButton="Tìm kiếm"
            size="large"
            bordered={false}
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "30px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall>Đăng Nhập/Đăng Ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;
