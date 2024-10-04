import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliceComponent from "../../components/SliceComponent/SliceComponent";
import sl1 from "../../assets/image/sl1.jpg";
import sl2 from "../../assets/image/sl2.jpg";
import sl3 from "../../assets/image/sl3.jpg";
import sl4 from "../../assets/image/sl4.jpg";

export const HomePage = () => {
  const arr = ["TV", "LAPTOP", "TU LANH"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
        <div
          id="container"
          style={{ backgroundColor: "#efefef", padding: "0 120px" }}
        >
          <SliceComponent arrImage={[sl1, sl2, sl3, sl4]} />
        </div>
        HomePage
      </div>
    </>
  );
};
