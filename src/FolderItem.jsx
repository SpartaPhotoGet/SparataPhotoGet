import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  __deleteContent,
  __getContentById,
  __updateContent,
} from "../redux/config/folderSlice";
import DeleteSrc from "./delete.png";
import UpdateSrc from "./update.png";

function FolderItem({ contents, feedId }) {
  const dispatch = useDispatch();

  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [userContent, setUserContent] = useState("");
  const [a, setA] = useState(contents);

  const onChangeBody = (e) => {
    const inputValue = e.target.value;
    setA(inputValue);
  };

  const cancelAndUpdateBtn = () => {
    if (isUpdateMode) {
      setIsUpdateMode(!isUpdateMode);
    } else {
      setIsUpdateMode(!isUpdateMode);
      setUserContent(userContent);
    }
  };

  const saveAndDeleteBtn = (contentId) => {
    if (isUpdateMode) {
      const payload = {
        id: contentId,
        userContent: a,
      };

      dispatch(__updateContent(payload));
      dispatch(__getContentById(feedId));
      setIsUpdateMode(!isUpdateMode);
    } else {
      dispatch(__deleteContent(contentId));
    }
  };

  return (
    <>
      {isUpdateMode ? (
        <Tag
          maxLength={100}
          type={"text"}
          placeholder={"태그를 적어주세요"}
          name="userContent"
          onChange={onChangeBody}
          value={a}
        />
      ) : (
        <Tag>{contents.userContent}</Tag>
      )}
      <Buttons>
        <button onClick={() => saveAndDeleteBtn(contents.id)}>
          {isUpdateMode ? "저장" : <DeleteBtn />}
        </button>
        <button onClick={cancelAndUpdateBtn}>
          {isUpdateMode ? "취소" : <UpdateBtn />}
        </button>
      </Buttons>
    </>
  );
}

export default FolderItem;

// 전체 틀
// const Container = styled.div`
//   border: 1px solid black;

//   width: 100%;
//   height: 1300px;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// 폴더, 버튼, 태그 다 감싼 div
const ImgContainer = styled.div`
  border: 1px solid #87ceeb;

  width: 100%;
  height: 1300px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 이미지들이 들어있는 div
const Images = styled.div`
  background-color: #87ceeb;

  width: 1150px;
  height: 750px;
  margin: auto;

  display: grid;
  grid-template-rows: repeat(3, 250px);
  grid-template-columns: repeat(5, 220px);
  justify-content: center;
  align-items: center;

  overflow-y: auto;
`;

// 추가+삭제 버튼을 만들기 위한 div
const ButtonBox = styled.div`
  border: 1px solid transparent;

  width: 1150px;
  height: 50px;
  margin: auto;
  display: flex;
`;

// 추가+삭제 버튼 감싸는 div
const Buttons = styled.div`
  border: 1px solid transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
`;

// 추가하기 버튼
const UpdateBtn = styled.button`
  margin-right: 15px;
  width: 100px;
  height: 50px;
  font-size: 20px;

  border: 1px solid transparent;
  background-color: black;
  color: white;
  border-radius: 15px;

  &:hover {
    border: 4px solid black;
    background-color: white;
    color: black;
    font-weight: bolder;
  }
`;

// 삭제하기 버튼
const DeleteBtn = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;

  border: 1px solid transparent;
  background-color: black;
  color: white;
  border-radius: 15px;

  &:hover {
    border: 4px solid black;
    background-color: white;
    color: black;
    font-weight: bolder;
  }
`;

// 개인 사진
const ImageBox = styled.div`
  border: 1px solid transparent;

  width: 220px;
  height: 220px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 태그+ 수정버튼 감싸는 div
const TagBox = styled.div`
  border: 1px solid black;

  width: 1000px;
  height: 150px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

// 태그 적는 Box

const Tag = styled.div`
  border: 1px solid black;

  width: 850px;
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 태그 수정을 위한 버튼입니다.
const CorBtn = styled.button`
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: black;

  color: white;
  font-size: 30px;
  margin-left: 15px;

  width: 100px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 5px solid black;
    background-color: white;
    color: black;
    font-weight: bolder;
  }
`;

// 작성된 댓글을 수정하는 버튼입니다.
const Update = styled.img`
  background-image: url(${UpdateSrc});
  /* border: 1px solid black; */
  margin-right: 10px;
  width: 25px;
`;

// 작성된 댓글을 삭제하는 버튼입니다.
const Delete = styled.img`
  background-image: url(${DeleteSrc});
  /* border: 1px solid transparent; */
  width: 25px;
`;
