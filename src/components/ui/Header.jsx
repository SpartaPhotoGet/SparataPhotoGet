import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import defaultStyle from "../../defaultStyle";

function Header() {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate(`../home`);
  };

  return (
    <HeaderContainer>
      <HomeGo onClick={onClickHome}>HangHaeBOX</HomeGo>
      <BeforeBtn onClick={onClickHome}>이전으로</BeforeBtn>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${defaultStyle.color.subColor};
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeGo = styled.button`
  width: 150px;
  height: 40px;
  font-size: 20px;
  margin-right: 10px;

  border: 2px solid ${defaultStyle.color.subColor};
  border-radius: 5px;
  color: black;

  &:focus {
    border: 3px solid black;
    border-color: ${defaultStyle.color.mainColor};
    /* font-weight: bolder; */
  }
`;

const BeforeBtn = styled.button`
  width: 110px;
  height: 40px;
  font-size: 20px;
  /* margin-right: 10px; */

  border: 2px solid ${defaultStyle.color.subColor};
  border-radius: 5px;
  color: black;

  &:focus {
    border: 3px solid black;
    border-color: ${defaultStyle.color.mainColor};
    /* font-weight: bolder; */
  }
`;
