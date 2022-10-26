import { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __addContent } from "../redux/modules/detail";
import defaultStyle from "../defaultStyle";

const MyModal = ({ isOpen, onSubmit, onCancel, feedId }) => {
  // const handleClickSubmit = () => {
  //   onSubmit();
  // };

  const handleClickCancel = () => {
    onCancel();
  };
  const [imageSrc, setImageSrc] = useState("");
  const [imgFile, setImgFile] = useState();
  const dispatch = useDispatch();

  const encodeStart = (img) => {
    const reader = new FileReader();
    setImgFile(img);

    reader.readAsDataURL(img);
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
  };

  const onFileUpload = () => {
    if (!imgFile) {
      alert("이미지를 선택 해주세요!!");
      return;
    }

    const formData = new FormData();
    formData.append("file", imgFile);

    const file = {
      id: feedId,
      imgData: formData,
    };

    dispatch(__addContent(file));
  };

  return (
    <ReactModal isOpen={isOpen}>
      <div>
        <div align="center" className="preview">
          {imageSrc && <img src={imageSrc} alt={"preview-img"} />}
        </div>

        <div align="center" className="input-group mb-3">
          <label htmlFor="file"></label>
          <ImgInput
            type="file"
            name="file"
            id="file"
            accept="image/*"
            onChange={(e) => {
              encodeStart(e.target.files[0]);
            }}
          />
        </div>
      </div>
      <Btns>
        <SubmitBtn onClick={onFileUpload}>확인</SubmitBtn>
        <CancelBtn onClick={() => handleClickCancel(false)}>취소</CancelBtn>
      </Btns>
    </ReactModal>
  );
};

export default MyModal;

const prev = styled.div`
  margin: auto;

  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgInput = styled.input`
  border: 1px solid transparent;

  width: 300px;

  &:current {
    border: 1px solid gray;
  }
`;

const FileUp = styled.div`
  width: 400px;
  height: 50px;
  font-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 추가 버튼
const SubmitBtn = styled.button`
  border: 2px solid ${defaultStyle.color.mainColor};
  background-color: transparent;
  border-radius: 5px;

  margin-right: 20px;
  width: 100px;
  height: 50px;
  font-size: 20px;

  &:focus {
    border: 3px solid black;
    border-color: ${defaultStyle.color.subColor};
  }
`;

// 취소 버튼
const CancelBtn = styled.button`
  border: 2px solid ${defaultStyle.color.mainColor};
  border-radius: 5px;
  background-color: transparent;
  width: 100px;
  height: 50px;
  font-size: 20px;

  &:focus {
    border: 3px solid black;
    border-color: ${defaultStyle.color.subColor};
  }
`;

const Btns = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
