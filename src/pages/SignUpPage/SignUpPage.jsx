import React, { useState } from "react";
import {
  WrapperContainerLeft,
  WrapperTextLight,
  WrapperContainerRight,
} from "./stylesignin";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponents from "../../components/ButtonComponents/ButtonComponents";
import imageLogo from "../../assets/image/anhlogin.png";
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.53",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào,</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="ito@gmail.com"
          />

          {/* Password Input with Toggle */}
          <div style={{ position: "relative", marginBottom: "10px" }}>
            <InputForm
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
            />
            <span
              onClick={togglePasswordVisibility}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "50%",
                right: "8px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
          </div>

          {/* Confirm Password Input with Toggle */}
          <div style={{ position: "relative", marginBottom: "10px" }}>
            <InputForm
              placeholder="confirm password"
              type={isShowConfirmPassword ? "text" : "password"}
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "50%",
                right: "8px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
          </div>

          <ButtonComponents
            bordered={false}
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textButton={"Đăng nhập"}
            styletextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          />
          <p>
            Bạn đã có tài khoản?
            <WrapperTextLight> Đăng Ký </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="image-logo"
            height={203}
            width={203}
          />
          <h4>Mua sắm tại I-Ecomerce</h4>
          <span>Siêu ưu đãi mỗi ngày</span>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
