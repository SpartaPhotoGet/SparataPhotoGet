import { useState } from "react";
import styled from "styled-components";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

/**
 * TODO:
 * -[] 회원가입시에만 에러메세지 출력
 * -[] 회원가입, 로그인 form 분리
 */

function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);

  const onSetRegister = () => {
    setIsRegister((prev) => !prev);
  };

  return (
    <Layout>
      {isRegister ? (
        <SignUp onSetRegister={onSetRegister} />
      ) : (
        <SignIn onSetRegister={onSetRegister} />
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
