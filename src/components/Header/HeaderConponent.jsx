import React from "react";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
} from "./style";
import { Col } from "antd";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

function HeaderComponent() {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader>IE-Commerce</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonSearch
            placeholder="input search text"
            textButton="Search"
            size="large"
            bordered={false}
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <span>Đăng Nhập/Đăng Ký</span>
              <div>
                <span>Tài Khoản</span>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            <span style={{ fontSize: "12px", color: "#fff" }}>Giỏ Hàng</span>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;
