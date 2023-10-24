import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin: 16px 200px 0 200px;
  font-size: 16px;
  height: 40px;
  .child-element:hover {
    color: #2975ff;
  }
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    background-color: rgba(0, 96, 255, 0.12);
    opacity: 1
  }
`;

export const WrapperProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`
