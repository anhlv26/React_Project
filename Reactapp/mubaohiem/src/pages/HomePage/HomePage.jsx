import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProduct, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slide1 from "../../assets/images/slides/slide1.jpg";
import slide2 from "../../assets/images/slides/slide2.jpg";
import slide3 from "../../assets/images/slides/slide3.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";

const HomPage = () => {
  const arr = [
    "NÓN DA",
    "NÓN ĐAN TAY",
    "NÓN VÀNH",
    "NÓN BẢO HIỂM",
    "NÓN KẾT",
    "NÓN SNAPBACK",
    "NÓN PHỚT",
    "NÓN JACKET",
  ];
  return (
    <div style={{ padding: "0 42px" }}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </WrapperTypeProduct>
      <div id="container">
        <SliderComponent arrImages={[slide1, slide2, slide3]} />
        <WrapperProduct>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProduct>
        <div style={{display: "flex" , width: "100%", justifyContent:"center", marginTop: "10px"}}>
          <WrapperButtonMore
            textButton="XEM THÊM"
            type="outline"
            style={{
              border: "1px solid rgb(10, 104, 255)",
              color: "rgb(10, 104, 255)",
              width: "240px",
              height: "38px",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomPage;
