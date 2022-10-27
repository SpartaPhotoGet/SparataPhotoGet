import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/ui/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import defaultStyle from "../defaultStyle";
import {
  __deleteImage,
  __getContentById,
  __updateContent,
} from "../redux/modules/detail";
import MyModal from "../modals/MyModal";
import CSS from "../pages/Checkbox.css";
import { __deleteFolder } from "../redux/modules/main";

function FolderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tags, photos } = useSelector((state) => state.imgReducer);
  const newTags = tags.join(", ");
  const params = useParams();
  const feedId = params.id;

  console.log(photos);

  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [tagT, setTagT] = useState("");
  const [imgT, setImgT] = useState("");
  const [idArr, setIdArr] = useState([]);

  useEffect(() => {
    dispatch(__getContentById(feedId));
    setTagT(newTags);
  }, [dispatch, feedId, newTags]);

  // const onChange = (e) => {
  //   const img = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("img", img);
  //   console.log("잘되는건가", formData);
  //   for (const keyValue of formData) console.log("키밸류", keyValue);
  // };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleModalSubmit = () => {
    setIsOpen(false);
  };

  const handleModalCancel = () => {
    setIsOpen(false);
  };

  const onClickUpdate = () => {
    setIsUpdateMode((prev) => !prev);
    const tag = tagT.split(", ");

    const payload = {
      id: feedId,
      tag,
    };

    if (isUpdateMode) {
      dispatch(__updateContent(payload));
    }
  };

  const ClickDeleteBtn = () => {
    const payload = {
      id: feedId,
      photos: idArr,
    };
    dispatch(__deleteImage(payload));
  };

  const onCreate = () => {
    const newPhoto = {
      // id: Id,
    };
  };
  // const deleteBtn = () => {
  // const payload = {
  //   id: contentId,
  //   imageId
  // };
  //   dispatch(__deleteContent(con))
  // }

  const tagsOnchange = (e) => {
    const value = e.target.value;
    setTagT(value);
  };

  const onClickImage = (e) => {};

  const onAddId = (e) => {
    console.log(e.target.checked);
    const check = e.target.checked;
    const id = e.target.id;
    // e.preventdefault();

    if (check) {
      setIdArr([...idArr, id]);
    } else {
      setIdArr(idArr.filter((boxId) => boxId !== id));
    }
  };

  const onDeleteFolder = () => {
    dispatch(__deleteFolder(feedId)).then(() => {
      navigate("/home");
    });
  };

  return (
    <Layout>
      <ImgContainer>
        <ButtonBox>
          <Buttons className="FolderPage">
            <UpdateBtn onClick={handleClick}>추가하기</UpdateBtn>
            <MyModal
              isOpen={isOpen}
              feedId={feedId}
              onSubmit={handleModalSubmit}
              onCancel={handleModalCancel}
            />
            <DeleteBtn onClick={ClickDeleteBtn}>삭제하기</DeleteBtn>
            <FolderDelBtn onClick={onDeleteFolder}>폴더삭제</FolderDelBtn>
          </Buttons>
        </ButtonBox>
        <Images>
          {photos?.map((item) => (
            <ImageBox>
              <input type="checkbox" id={item.id} onClick={onAddId} />

              <label for="{item.id}">
                <img src={item.photos} />
              </label>
            </ImageBox>
          ))}
        </Images>
        <TagBox>
          {isUpdateMode ? (
            <>
              <TagInput
                maxLength={100}
                type={"text"}
                placeholder={"태그를 적어주세요"}
                name="userContent"
                value={tagT}
                onChange={tagsOnchange}
                required
              />
              <SetUpdateBtn onClick={onClickUpdate}>수정완료</SetUpdateBtn>
            </>
          ) : (
            <>
              <Tag>{newTags}</Tag>
              <UpdateBtn onClick={onClickUpdate}>태그수정</UpdateBtn>
            </>
          )}
        </TagBox>
        <TagCom>
          <p>
            기존 태그 수정 및 새로운 태그 추가시 태그앞에 "#" 붙여주시고 작성 및
            ","를 이용하여 구분하여 주십시오.
          </p>
          <br></br>
          <Ex>예시: #한강, #여의나루, #항해99, #미니프로젝트</Ex>
        </TagCom>
      </ImgContainer>
    </Layout>
  );
}

export default FolderPage;

// 폴더, 버튼, 태그 다 감싼 div
const ImgContainer = styled.div`
  border: 2px dashed ${defaultStyle.color.mainColor};

  width: 100%;
  height: 800px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 이미지들이 들어있는 div
const Images = styled.div`
  /* background-color: #87ceeb; */

  width: 1000px;
  height: 480px;
  margin: 30px auto;

  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-auto-rows: min-content;
  grid-template-rows: repeat(3, 160px);
  /* grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); */
  justify-content: center;
  align-items: center;
  white-space: normal;

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
  width: 120px;
  height: 40px;
  font-size: 20px;
  margin-left: 10px;

  border: 2px solid ${defaultStyle.color.subColor};
  border-radius: 5px;
  color: black;

  &:focus {
    border: 3px solid black;
    border-color: ${defaultStyle.color.mainColor};
    /* font-weight: bolder; */
  }
`;

// 수정완료 버튼
const SetUpdateBtn = styled.button`
  margin-right: 15px;
  width: 120px;
  height: 40px;
  font-size: 20px;
  margin-left: 5px;

  border: 2px solid ${defaultStyle.color.subColor};
  border-radius: 5px;
  color: black;

  &:focus {
    border: 3px solid black;
    border-color: ${defaultStyle.color.mainColor};
    /* font-weight: bolder; */
  }
`;

// 삭제하기 버튼
const DeleteBtn = styled.button`
  width: 120px;
  height: 40px;
  font-size: 20px;

  border: 2px solid ${defaultStyle.color.subColor};
  border-radius: 5px;
  color: black;

  &:focus {
    border: 3px solid black;
    border-color: ${defaultStyle.color.mainColor};
    /* font-weight: bolder; */
  }
`;

const FolderDelBtn = styled.button`
  width: 120px;
  height: 40px;
  font-size: 20px;
  margin-left: 15px;

  border: 2px solid ${defaultStyle.color.subColor};
  border-radius: 5px;
  color: black;

  &:focus {
    border: 3px solid black;
    border-color: ${defaultStyle.color.mainColor};
    /* font-weight: bolder; */
  }
`;

// 개인 사진
const ImageBox = styled.div`
  background-color: transparent;
  border: 2px solid ${defaultStyle.color.mainColor};

  margin: auto;
  width: 200px;
  height: 160px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 태그+ 수정버튼 감싸는 div
const TagBox = styled.div`
  border: 2px solid transparent;

  width: 800px;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

// 태그 적는 Box

const Tag = styled.div`
  border: 2px solid ${defaultStyle.color.subColor};
  border-radius: 5px;

  width: 600px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

//태그를 넣는 input
const TagInput = styled.input`
  border: 2px solid ${defaultStyle.color.subColor};
  border-radius: 5px;

  margin-right: 5px;
  width: 600px;
  height: 40px;
`;

// 태그의 부연설명이 적힌 div

const TagCom = styled.div`
  border: 1px solid transparent;
  font-size: 16px;
  font-weight: 600;
  color: red;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;

// 부연설명 2번
const Ex = styled.div`
  font-size: 30px;
`;
