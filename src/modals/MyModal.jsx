import { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

const MyModal = ({ isOpen, onSubmit, onCancel }) => {
  const handleClickSubmit = () => {
    onSubmit();
  };

  const handleClickCancel = () => {
    onCancel();
  };
  const [imageSrc, setImageSrc] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <ReactModal isOpen={isOpen}>
      <div>
        <div align="center" className="preview">
          {imageSrc && <img src={imageSrc} alt={"preview-img"} />}
        </div>

        <div align="center" class="input-group mb-3">
          <label for="file">
            <FileUp class="btn-upload">파일을 업로드해주세요</FileUp>
          </label>
          <ImgInput
            type="file"
            name="file"
            id="file"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
            }}
          />
        </div>
      </div>
      <Btns>
        <SubmitBtn onClick={handleClickSubmit}>확인</SubmitBtn>
        <CancelBtn onClick={handleClickCancel}>취소</CancelBtn>
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
`;

const FileUp = styled.div`
  width: 400px;
  height: 50px;
  font-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubmitBtn = styled.button`
  border: 1px solid black;
  background-color: transparent;

  margin-right: 20px;
  width: 100px;
  height: 50px;
  font-size: 20px;
`;

const CancelBtn = styled.button`
  border: 1px solid black;

  background-color: transparent;
  width: 100px;
  height: 50px;
  font-size: 20px;
`;

const Btns = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
