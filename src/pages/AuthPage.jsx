import { useState } from "react";
import styled from "styled-components";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { clearErr } from "../redux/modules/auth";

/**
 * TODO:
 * -[] 회원가입시에만 에러메세지 출력
 * -[] 회원가입, 로그인 form 분리
 */

function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.authReducer);

  const onSetRegister = () => {
    dispatch(clearErr());
    setIsRegister(!isRegister);
  };

  return (
    <Layout>
      {isRegister ? (
        <SignUp onSetRegister={onSetRegister} error={error} />
      ) : (
        <SignIn
          onSetRegister={onSetRegister}
          isLoading={isLoading}
          error={error}
        />
      )}
    </Layout>
  );
}

export default AuthPage;

const Layout = styled.div`
  max-width: 450px;
  min-width: 450px;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
