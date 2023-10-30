import React, { useState } from "react";
import { Input } from "antd";
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
  const [valueInput, setValueInput] = useState("");
  const { placeholder = "Nhập text", ...rest } = props;
  return (
    <div>
      <WrapperInputStyle
        placeholder={placeholder}
        valueInput={valueInput}
        {...rest}
      />
      ;
    </div>
  );
};

export default InputForm;
