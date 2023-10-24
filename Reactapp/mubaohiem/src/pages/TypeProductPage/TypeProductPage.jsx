import React, { Fragment } from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";

const TypeProductPage = () => {
  const onChange = () => {};

  return (
    <div>
      <Row style={{ padding: "0 42px" }}>
        <Col>
          <CardComponent />
        </Col>
      </Row>
      <Pagination
        defaultCurrent={2}
        total={500}
        onChange={onChange}
        style={{textAlign:"center", marginTop: "12px"}}
      />
    </div>
  );
};

export default TypeProductPage;
