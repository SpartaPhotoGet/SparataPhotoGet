import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import defaultStyle from "../defaultStyle";
import { __signUp } from "../redux/modules/auth";
import Input from "./ui/Input";

function SignUp({ onSetRegister }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 오류메세지 상태저장
  const [nameMessage, setNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.authReducer);

  const onChangeName = (e) => {
    const nameRegex = /^[a-z0-9]{4,10}$/;
    const nameCurrent = e.target.value;
    setName(nameCurrent);

    if (!nameRegex.test(nameCurrent)) {
      setNameMessage("5글자 이상 11글자 미만 영문과 숫자로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 아이디 형식입니다 :)");
      setIsName(true);
    }
  };

  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호에요 : )");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfirm(passwordConfirmCurrent);

    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요 : )");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ");
      setIsPasswordConfirm(false);
    }
  };

  // TODO: 로그인, 회원가입 submit disabled 관리
  const onSignUp = () => {
    const userInfo = {
      userId: name,
      password,
      passwordConfirm,
    };

    if (isName && isPassword && isPasswordConfirm) {
      dispatch(__signUp(userInfo)).then((success) => {
        if (success.meta.requestStatus !== "rejected") {
          onSetRegister();
        }
      });
    }
  };
  return (
    <>
      <Title>회원가입</Title>
      <RegisterText onClick={onSetRegister}>로그인!</RegisterText>
      <Input
        label="아이디"
        message={error?.message || nameMessage}
        onChage={onChangeName}
        value={name}
      />
      <Input
        label="패스워드"
        type="password"
        message={passwordMessage}
        onChage={onChangePassword}
        value={password}
      />
      <Input
        label="패스워드확인"
        type="password"
        message={passwordConfirmMessage}
        onChage={onChangePasswordConfirm}
        value={passwordConfirm}
      />
      <Button onClick={onSignUp}>회원가입</Button>
    </>
  );
}

export default SignUp;

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

const Title = styled.h1`
  font-size: ${defaultStyle.fontSize.large};
  margin-bottom: 20px;
`;

const RegisterText = styled.span`
  cursor: pointer;
  width: fit-content;
  color: ${defaultStyle.color.subColor};

  &:hover {
    color: ${defaultStyle.color.mainColor};
  }
`;
