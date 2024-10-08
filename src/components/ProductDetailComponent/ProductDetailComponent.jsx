import { Col, Image, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/image/sp1.webp";
import imageProductSmall from "../../assets/image/sp3.webp";
import ButtonComponents from "../ButtonComponents/ButtonComponents";
import {
  WrapperStyleImageSmall,
  WrapperStyleColImage,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperPriceProduct,
  WrapperTextProduct,
  WrapperAddress,
  WrapperAmount,
  WrapperInputNumber,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";

const ProductDetailComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius: "4px" }}>
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
        <Image src={imageProduct} alt="image product" preview="false"></Image>
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>
          Điện thoại Samsung Galaxy A05s (4GB/128GB) - Đã kích hoạt bảo hành
          điện tử - Hàng chính hãng
        </WrapperStyleNameProduct>
        <div>
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <WrapperStyleTextSell> | Sold 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperTextProduct>500.000</WrapperTextProduct>
        </WrapperPriceProduct>
        <WrapperAddress>
          <span>Delivered to </span>
          <span className="address">
            26A, My Da Dong 8, My An, Ngu Hanh Son, Da Nang
          </span>{" "}
          - <span className="change-address"> Change Address</span>
        </WrapperAddress>
        <div
          style={{
            margin: "10px 0 20px",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
            padding: "10px 0",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Amount</div>
          <WrapperAmount>
            <button>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
            <WrapperInputNumber
              size="small"
              defaultValue={2}
              onChange={onChange}
            />
            <button>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperAmount>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponents
            bordered={false}
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              height: "48px",
              wight: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            textButton={"Chọn mua"}
            styletextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          />
          <ButtonComponents
            size={40}
            styleButton={{
              background: "#fff",
              height: "48px",
              wight: "220px",
              border: "1px solid rgb(13,92,182)",
              borderRadius: "4px",
            }}
            textButton={"Mua trả sau"}
            styletextButton={{ color: "rgb(13,92,182)", fontSize: "15px" }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
