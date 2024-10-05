import React from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Row, Pagination, Col } from "antd";
import { WrapperProducts, WrapperNavbar } from "./styleProduct";

const TypeProductPage = () => {
  const onChange = (pageNumber) => {};
  return (
    <div style={{ padding: "0 120px", background: "#efefef" }}>
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <WrapperNavbar span={4}>
          <NavbarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>

          {/* Bọc Pagination trong div với flexbox */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Pagination defaultCurrent={2} total={100} onChange={onChange} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
