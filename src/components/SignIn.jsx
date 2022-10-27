import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import defaultStyle from "../defaultStyle";
import { __signIn } from "../redux/modules/auth";
import Input from "./ui/Input";

function SignIn({ onSetRegister, isLoading, error }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const onChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const onSignIn = () => {
    if (!name.trim() || !password.trim()) {
      setMessage("모든 항목을 입력해주세요");
      return;
    }

    const user = {
      userId: name,
      password,
    };
    dispatch(__signIn(user)).then(() => {
      navigate("/home");
    });
  };
  return (
    <>
      <Title>HangHaeBox</Title>
      <RegisterText onClick={onSetRegister}>회원가입!</RegisterText>
      <Input
        label="아이디"
        value={name}
        onChage={onChangeName}
        message={error?.message || message}
      />
      <Input
        label="패스워드"
        type="password"
        value={password}
        onChage={onChangePassword}
      />
      <Button onClick={onSignIn} disabled={isLoading}>
        {isLoading ? "..." : "로그인"}
      </Button>
    </>
  );
}

export default SignIn;
const Title = styled.h1`
  font-size: ${defaultStyle.fontSize.large};
  margin-bottom: 20px;
`;

const Button = styled.button`
  height: 40px;
  cursor: pointer;
  border: none;
  background-color: ${defaultStyle.color.subColor};
  border-radius: 5px;
  transition: 0.1s ease-in-out;
  font-weight: 600;
  color: gray;
  &:hover {
    background-color: ${defaultStyle.color.mainColor};
  }
`;

const RegisterText = styled.span`
  cursor: pointer;
  color: ${defaultStyle.color.subColor};

  &:hover {
    color: ${defaultStyle.color.mainColor};
  }
`;
