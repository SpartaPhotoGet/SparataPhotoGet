import axios from "axios";

// 유저 인증과 관련된 인스턴스와, 일반 인스턴스를 따로 구분 해야하나??
// ex) 로그인전에는 headers가 존재하지 않은경우
// 로그인후에는 항상 headers에 토큰을 담아 보내줘야함.
// 토큰 가져오는 방법

const api = axios.create({
  baseURL: "http://13.124.173.3/",
});

api.interceptors.request.use(
  function (config) {
    if (config.url !== "member/login" || config.url !== "member/signup") {
      config.headers.authorization = localStorage.getItem("authorization");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    if (response.config.url === "member/login" && response.data.success) {
      localStorage.setItem("authorization", response.headers.authorization);
      localStorage.setItem("refresh_token", response.headers.refreZsh_token);
    }
    return response;
  },

  function (error) {
    return Promise.reject(error.response.data.error);
  }
);

export default api;
