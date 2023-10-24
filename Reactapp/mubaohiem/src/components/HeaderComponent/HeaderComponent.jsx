import { Badge, Col, Image } from "antd";
import React from "react";
import { WrapperHeader, WrapperHeaderAccount } from "./style";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import logo from "../../assets/images/logo/logo-offical.jpg";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={4} style={{ display: "flex", alignItems: "center" }}>
          <Image src={logo} style={{ height: "40px", preview: "false" }} />
          <div style={{ marginLeft: "8px", fontWeight: "500" }}>AnhShop</div>
        </Col>
        <Col span={16}>
          <ButtonInputSearch
            size="large"
            placeholder="Mũ bảo hiểm giá rẻ tại AnhShop"
            textButton="Tìm kiếm"
          />
        </Col>

        <Col
          span={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "40px",
          }}
        >
          <WrapperHeaderAccount>
            <UserOutlined
              style={{
                fontSize: "28px",
                padding: "0 5px 0 20px",
                outline: "none",
              }}
            />
            <div>
              <span>Tài khoản</span>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count="4" size="small">
              <ShoppingCartOutlined
                style={{
                  fontSize: "28px",
                  marginLeft: "20px",
                  cursor:"pointer"
                }}
              />
            </Badge>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
