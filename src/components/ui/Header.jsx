import React from "react";
import styled from "styled-components";
import defaultStyle from "../../defaultStyle";

function Header() {
  return <HeaderContainer>hanghaeBOX</HeaderContainer>;
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${defaultStyle.color.subColor};
  padding: 10px;
`;
