import React from "react";
import { Col, Row, Image, InputNumber, Button } from "antd";
import imageProduct from "../../assets/images/products/Non da/nonda-1/nonda1-main.webp";
import imageProductSmall1 from "../../assets/images/products/Non da/nonda-1/nonda1-small1.webp";
import imageProductSmall2 from "../../assets/images/products/Non da/nonda-1/nonda1-small2.webp";
import imageProductSmall3 from "../../assets/images/products/Non da/nonda-1/nonda1-small3.webp";
import {
  WrapperAddressProduct,
  WrapperBtnQualityProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleNameProduct,
  WrapperStyleSmall,
  WrapperStyleTextSell,
  WrapperTextProduct,
} from "./style";
import {
  StarFilled,
  StarOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailComponent = () => {
  const onChange = () => {};
  return (
    <div>
      <Row style={{ padding: "16px", background: "#fff", borderRadius: "4px" }}>
        <Col
          span={10}
          style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
        >
          <Image src={imageProduct} alt="image product" preview={false} />
          <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
            <WrapperStyleColImage span={4}>
              <WrapperStyleSmall
                src={imageProductSmall3}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleSmall
                src={imageProductSmall1}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleSmall
                src={imageProductSmall2}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleSmall
                src={imageProductSmall2}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleSmall
                src={imageProductSmall2}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleSmall
                src={imageProductSmall2}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
          </Row>
        </Col>
        <Col span={14} style={{ paddingLeft: "8px" }}>
          <WrapperStyleNameProduct>
            Mũ lưỡi trai nam Da cao cấp NU-1
          </WrapperStyleNameProduct>
          <div>
            <StarOutlined style={{ color: "#ffc400" }} />
            <StarOutlined style={{ color: "#ffc400" }} />
            <StarOutlined style={{ color: "#ffc400" }} />
            <StarOutlined style={{ color: "#ffc400" }} />
            <StarOutlined style={{ color: "#ffc400" }} />
            <WrapperStyleTextSell> | Da ban 34</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperTextProduct>200.000d</WrapperTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span className="address">
              Giao đến TP. Thanh Hóa, P. Đông Thọ, Thanh Hóa
            </span>
            <span className="change-address">Đổi</span>
          </WrapperAddressProduct>
          <div>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
              Số lượng
            </div>
            <WrapperQualityProduct>
              <button style={{ border: "none", background: "transparent" }}>
                <MinusOutlined style={{ color: "#000" }} />
              </button>

              <WrapperInputNumber
                defaultValue={3}
                onChange={onChange}
                size="small"
              />
              <button style={{ border: "none", background: "transparent" }}>
                <PlusOutlined style={{ color: "#000" }} />
              </button>
            </WrapperQualityProduct>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            <ButtonComponent
              size={20}
              style={{
                background: "rgb(255,57,69)",
                fontSize: "16px",

                color: "#fff",
                fontWeight: "400",
                width: "220px",
                height: "48px",
                border: "none",
              }}
              textButton={"Chọn mua"}
            />
            <ButtonComponent
              size={20}
              style={{
                backgroundColor: "#fff",
                fontSize: "16px",
                color: "#156fff",
                fontWeight: "400",
                width: "220px",
                height: "48px",
                borderColor: "#156fff",
              }}
              textButton={"Thêm vào giỏ"}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailComponent;
