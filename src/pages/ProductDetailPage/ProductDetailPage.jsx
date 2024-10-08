import React from "react";
import * as Styles from "./styleProductDetail";
import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";
const ProductDetailPage = () => {
  return (
    <div
      style={{ padding: "0 120px", background: "#efefef", height: "1000px" }}
    >
      <h5>HomePage</h5>
      <ProductDetailComponent></ProductDetailComponent>
    </div>
  );
};

export default ProductDetailPage;
