import styled from "styled-components";

const defaultStyle = {
  fontSize: {
    small: "15px",
    medium: "20px",
    large: "30px",
  },

  color: {
    mainColor: "#98A8F8",
    subColor: "#BCCEF8",
    whiteColor: "#FAF7F0",
  },
};

export const InputDefault = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${defaultStyle.color.subColor};

  &:focus {
    outline: none;
    border-color: ${defaultStyle.color.mainColor};
  }
`;

export default defaultStyle;
