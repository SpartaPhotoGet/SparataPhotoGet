import styled from "styled-components";
import defaultStyle, { ButtonDefault, InputDefault } from "../defaultStyle";
import { useDispatch } from "react-redux";
import useInputs from "./useInput";
import { useState } from "react";
import { __addFolder } from "../redux/modules/main";
import Input from "./ui/Input";

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
    dispatch(__addFolder(folder)).then(() => {
      window.location.reload();
    });
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
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
        <Input
          name="folderName"
          label="제목"
          value={form.folderName}
          onChange={onChange}
        />
        <Input
          name="tag"
          label="태그"
          maxLength="10"
          value={tagForm.tag}
          onChange={onChangeTag}
          onKeyPress={onEnterPress}
          placeholder="입력후 Enter!!"
        >
          <BadgeWrapper>
            {tagArr.map((tag, i) => (
              <TagBadge key={i}>{tag}</TagBadge>
            ))}
          </BadgeWrapper>
        </Input>
      </InputBox>
      <BtnBox>
        <AddBtn onClick={onAddClick}>추가</AddBtn>
        <CancleBtn onClick={onModalClick}>취소</CancleBtn>
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

const BtnBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  gap: 20px;
`;

const AddBtn = styled(ButtonDefault)`
  width: 50%;
`;
const CancleBtn = styled(ButtonDefault)`
  width: 50%;
  background-color: #ffa494;

  &:hover {
    border: 2px solid #ffa494;
  }
`;

const BadgeWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 8px;
`;

const TagBadge = styled.span`
  font-size: small;
  padding: 5px;
  background-color: #ffefd0;
  width: fit-content;
  border-radius: 10px;
`;
