import styled from "styled-components";
import defaultStyle, { InputDefault } from "../defaultStyle";
import { useDispatch } from "react-redux";
import useInputs from "./useInput";
import { useState } from "react";
import { __addFolder } from "../redux/modules/main";
import Input from "./ui/Input";

// TODO: 버튼 css

function AddFolderModal({ onModalClick }) {
  const [form, onChange] = useInputs({
    folderName: "",
    date: "",
  });

  const [tagForm, onChangeTag, resetTag] = useInputs({
    tag: "",
  });

  const [tagArr, setTagArr] = useState([]);

  const dispatch = useDispatch();

  const onAddClick = () => {
    const { folderName, date } = form;

    const folder = {
      folderName,
      date,
      tag: tagArr,
    };

    setTagArr([]);
    dispatch(__addFolder(folder));
    onModalClick();
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      console.log(tagForm.tag);
      const newTag = `#${tagForm.tag}`;
      setTagArr([...tagArr, newTag]);
      resetTag();
    }
  };

  return (
    <ModalContainer>
      <InputBox>
        <ModalTitle>폴더 추가하기</ModalTitle>
        <InputWrapper>
          <InputLabel>날짜</InputLabel>
          <DateInput
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
          />
        </InputWrapper>
        <Input name="folderName" value={form.folderName} onChange={onChange} />
        <Input
          name="tag"
          value={tagForm.tag}
          onChange={onChangeTag}
          onKeyPress={onEnterPress}
          placeholder="입력후 Enter!!"
        >
          <TagBadge>{tagArr}</TagBadge>
        </Input>
      </InputBox>
      <BtnBox>
        <ModalBtn onClick={onAddClick}>추가</ModalBtn>
        <ModalBtn onClick={onModalClick}>취소</ModalBtn>
      </BtnBox>
    </ModalContainer>
  );
}

export default AddFolderModal;

const ModalContainer = styled.div`
  height: 500px;
  width: 650px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${defaultStyle.color.whiteColor};
  padding: 20px 50px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

const ModalTitle = styled.h1`
  font-size: ${defaultStyle.fontSize.large};
  margin-bottom: 20px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto 0;
`;

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

const DateInput = styled.input`
  position: relative;
  border: 1px solid ${defaultStyle.color.subColor};
  width: 200px;
  font-size: ${defaultStyle.fontSize.small};
  border-radius: 5px;
  text-align: center;

  ::-webkit-datetime-edit {
    padding: 10px 0px;
  }

  ::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    cursor: pointer;
  }
`;

const FolderNameInput = styled(InputDefault)``;
const TagsInput = styled(InputDefault)``;

const BtnBox = styled.div``;

const ModalBtn = styled.button``;

const TagBadge = styled.span``;
