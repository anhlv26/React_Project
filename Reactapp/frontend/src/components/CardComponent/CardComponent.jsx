import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from "./style";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { convertPrice } from "../../utils";
import offical from "../../assets/images/offical/offical.png";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const CardComponent = (props) => {
  const {
    countInStock,
    description,
    image,
    name,
    price,
    rating,
    type,
    discount,
    selled,
    id,
  } = props;

  const navigate = useNavigate();
  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`);
  };
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{
        width: 200,
        borderRadius: "8px",
        borderTopRightRadius: "8px",
        borderTopLeftRadius: "8px",
        border: "1px solid #ccc",
      }}
      bodyStyle={{ padding: "10px" }}
      cover={<img alt="example" src={image} />}
      onClick={() => handleDetailsProduct(id)}
    >
      <img
        src={offical}
        style={{
          width: "89px",
          height: "20px",
          opacity: "1",
          marginBottom: "8px",
        }}
      />
      <StyleNameProduct>{name}</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>{rating} </span>{" "}
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
        </span>

        {/* <WrapperStyleTextSell> | Da ban {selled || 1000}+</WrapperStyleTextSell> */}
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: "8px" }}>{convertPrice(price)}</span>
        {/* <WrapperDiscountText>- {discount || 5} %</WrapperDiscountText> */}
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
