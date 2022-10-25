import styled from "styled-components";
import defaultStyle from "../../defaultStyle";

function Input({ children, label, value, onChage, message, ...rest }) {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputDefault name={label} value={value} onChange={onChage} {...rest} />
      {message && <Message>{message}</Message>}
      {children}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-size: small;
  font-weight: 500;
  margin-bottom: 5px;
  color: #2b2b2b;
`;

const InputDefault = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${defaultStyle.color.subColor};

  &:focus {
    outline: none;
    border-color: ${defaultStyle.color.mainColor};
  }
`;

const Message = styled.span`
  color: #f87c7c;
  margin-top: 5px;
`;

export default Input;
