import React from "react";
import { Card, Image } from "antd";
import {
  StyleNameProduct,
  WrapperCartStyle,
  WrapperImageStyle,
  WrapperPrice,
  WrapperReportText,
} from "./style";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import offical from "../../assets/images/offical/offical.png";

const { Meta } = Card;

const CardComponent = () => {
  const { Meta } = Card;
  return (
    <WrapperCartStyle
      hoverable
      bodyStyle={{padding:"4px 12px 12px 12px"}}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <WrapperImageStyle
        src={offical}
      />
      <StyleNameProduct>Nón beret da MC012D-DN1</StyleNameProduct>
      <WrapperReportText>
        <StarFilled style={{ color: "#ffc400" }} />
        <StarFilled style={{ color: "#ffc400" }} />
        <StarFilled style={{ color: "#ffc400" }} />
        <StarFilled style={{ color: "#ffc400" }} />
        <StarOutlined style={{ color: "#dddde4" }} />
      </WrapperReportText>
      <WrapperPrice>6.000.000 VNĐ</WrapperPrice>
    </WrapperCartStyle>
  );
};

export default CardComponent;
