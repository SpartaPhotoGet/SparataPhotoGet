import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AuthPage from "./AuthPage";
import Home from "./Home";

function Pages() {
  const token = localStorage.getItem("authorization");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!token) navigate("/");
    if (token && pathname === "/") navigate("/home");
  }, [navigate, token, pathname]);

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Pages;
