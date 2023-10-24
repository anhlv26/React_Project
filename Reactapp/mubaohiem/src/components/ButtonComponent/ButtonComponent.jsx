import React from "react";
import { Button } from "antd";

const ButtonComponent = ({size, style,textButton,...rest}) => {
  return (
    <Button
      size={size}
      style={style}
      // icon={<SearchOutlined />}
      {...rest}
    >
      {textButton}
    </Button>
  );
};

export default ButtonComponent;
