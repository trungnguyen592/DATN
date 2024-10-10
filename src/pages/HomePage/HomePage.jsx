import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct/TypeProduct";
import {
  WrapperTypeProduct,
  WrapperButtonMore,
  WrapperProducts,
} from "./style";
import SliceComponent from "../../components/SliceComponent/SliceComponent";
import sl1 from "../../assets/image/sl1.jpg";
import sl2 from "../../assets/image/sl2.jpg";
import sl3 from "../../assets/image/sl3.jpg";
import sl4 from "../../assets/image/sl4.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";

export const HomePage = () => {
  const arr = ["TV", "LAPTOP", "TU LANH"];
  return (
    <>
      <div style={{ width: "1270px", margin: " 0 auto" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        className="body"
        style={{
          backgroundColor: "#efefef",
          width: "100%",
        }}
      >
        <div
          id="container"
          style={{ height: "1000px", width: "1270px", margin: " 0 auto" }}
        >
          <SliceComponent arrImage={[sl1, sl2, sl3, sl4]} />
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <WrapperButtonMore
              textButton="More"
              type="outline"
              styleButton={{
                border: "1px solid rgb(11, 116, 229)",
                color: "rgb(11, 116, 229)",
                width: "240px",
                height: "38px",
                boderRadius: "4px",
              }}
              styletextButton={{ fontweight: 500 }}
            ></WrapperButtonMore>
          </div>
        </div>
      </div>
    </>
  );
};
