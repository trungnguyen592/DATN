import { Input } from "antd";
import styled from "styled-components";

export const WrapperInputStyle = styled(Input)`
  border-top: none;
  border-right: none;
  border-left: none;
  background color: rbg(237, 240, 254);
  outline: none;
  &:focus {
    background-color: rgb(232, 240, 254);
  }
`;
