import React from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/images/logo/logo-signIn.png";
import { Image } from "antd";

const SignUpPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
        }}
      >
        <WrapperContainerLeft>
          <h1
            style={{ fontSize: "24px", fontWeight: "500", margin: "0 0 10px" }}
          >
            Xin chào
          </h1>
          <p style={{ fontSize: "15px" }}>Đăng nhập hoặc tạo tài khoản</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
          />
          <InputForm placeholder="password" style={{ marginBottom: "10px" }} />
          <InputForm placeholder="confirm password" />
          <ButtonComponent
            size={20}
            style={{
              background: "rgb(255,57,69)",
              fontSize: "16px",
              color: "#fff",
              fontWeight: "400",
              width: "100%",
              height: "48px",
              border: "none",
              marginBottom: "20px",
              marginTop: "20px",
            }}
            textButton={"Tiep tuc"}
          />
          <p>
            <WrapperTextLight>Quên mật khẩu</WrapperTextLight>
          </p>
          <p style={{ fontSize: "13px" }}>
            Chưa có tài khoản <WrapperTextLight>Tạo tài khoản</WrapperTextLight>
          </p>
        </WrapperContainerLeft>

        <WrapperContainerRight
          style={{
            width: "300px",
            background:
              "linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: "6px",
            borderBottomRightRadius: "6px",
          }}
        >
          <Image
            src={imageLogo}
            preview={false}
            alt="image-logo"
            height="203px"
            width="203px"
          />
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
