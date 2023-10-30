import styled from "styled-components";
import { Col, Image, InputNumber } from "antd";

export const WrapperStyleSmall = styled(Image)`
  height: 64px;
  width: 64px;
`;

export const WrapperStyleColImage = styled(Col)`
  flex-basis: unset;
  display: flex;
`;

export const WrapperStyleNameProduct = styled.h1`
  color: rgb(39, 39, 42);
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  word-break: break-word;
  white-space: break-spaces;
`;

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;

export const WrapperPriceProduct = styled.div`
    background: rgb(250,250,250)
    border-radius: 4px;
`;

export const WrapperTextProduct = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
  padding: 10px;
  margin-top: 10px;
`;

export const WrapperAddressProduct = styled.div`
  span.address {
    font-size: 15px;
    line-height: 24px;
    font-weight: 200;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsisl;
    cursor: pointer;
  }
  ,
  span.change-address {
    color: #0b74e5;
    font-size: 16px;
    line-height: 24px;
    font-weight: 200;
    margin-left: 24px;
    cursor: pointer;
  }
`;

export const WrapperQualityProduct = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 120px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const WrapperInputNumber = styled(InputNumber)`
  &.ant-input-number.ant-input-number-sm {
    width: 60px;
    border-top: none;
    border-bottom: none;
  }
  &.ant-input-number-handler-wrap {
    display: none;
  }
`;
