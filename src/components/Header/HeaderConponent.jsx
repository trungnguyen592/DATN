import React from "react";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
} from "./style";
import { Input, Col } from "antd";
import {
  AudioOutlined,
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
function HeaderComponent() {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader>IE-Commerce</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="medium"
            suffix={suffix}
            onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: "20px" }}>
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
