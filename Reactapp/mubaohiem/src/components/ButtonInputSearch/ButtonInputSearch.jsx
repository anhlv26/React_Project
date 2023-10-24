import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    backgroundColorInput,
    backgroundColorButton,
    colorButton = "#31aaff",
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        style={{ outline: "none" }}
      />
      <ButtonComponent
        size={size}
        style={{ color: colorButton }}
        textButton={textButton}
        icon={<SearchOutlined />}
      />
    </div>
  );
};

export default ButtonInputSearch;
