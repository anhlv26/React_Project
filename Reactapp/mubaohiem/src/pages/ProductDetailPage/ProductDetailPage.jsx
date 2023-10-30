import React from "react";
import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";

const ProductDetailPage = () => {
  return (
    <div
      style={{
        padding: "16px 42px",
        backgroundColor: "#efefef",
        height: "1000px",
      }}
    >
      <h4>Trang chu</h4>
        <ProductDetailComponent />
    </div>
  );
};

export default ProductDetailPage;
