import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/ui/Layout";
import FolderItem from "../components/FolderItem";
import { FcCamera } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getContentById, __updateContent } from "../redux/modules/detail";
import MyModal from "../modals/MyModal";

function FolderPage() {
  const dispatch = useDispatch();
  const { tags, img } = useSelector((state) => state.imgReducer);
  const newTags = tags.join(", ");
  const params = useParams();
  const feedId = params.id;

  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [tagT, setTagT] = useState("");

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

  return (
    <Layout>
      <ImgContainer>
        <ButtonBox>
          <Buttons className="FolderPage">
            <UpdateBtn onClick={handleClick}>추가하기</UpdateBtn>
            <MyModal
              isOpen={isOpen}
              onSubmit={handleModalSubmit}
              onCancel={handleModalCancel}
            />
            <DeleteBtn>삭제하기</DeleteBtn>
          </Buttons>
        </ButtonBox>
        <Images>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
          <ImageBox>
            <FcCamera size="10px;" />
          </ImageBox>
        </Images>
        <div>
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
              <DeleteBtn onClick={onClickUpdate}>수정완료</DeleteBtn>
            </>
          ) : (
            <>
              <Tag>{newTags}</Tag>
              <UpdateBtn onClick={onClickUpdate}>태그수정</UpdateBtn>
            </>
          )}
        </div>
        {/* <TagBox>
          {contentData?.contents?.data?.tags?.map((tag) => (
            <span>{tag}</span>
          ))}
        </TagBox> */}
        {/* <FolderItem
          feedId={feedId}
          contents={contentData?.contents?.data?.tags}
        /> */}
      </ImgContainer>
    </Layout>
  );
}

export default FolderPage;

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
  height: 800px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 이미지들이 들어있는 div
const Images = styled.div`
  background-color: #87ceeb;

  width: 1000px;
  height: 480px;
  margin: 30px auto;

  display: grid;
  grid-template-rows: repeat(3, 160px);
  grid-template-columns: repeat(6, 160px);
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
  width: 80px;
  height: 40px;
  font-size: 15px;

  border: 1px solid transparent;
  border-radius: 15px;
  background-color: black;
  color: white;

  &:hover {
    border: 3px solid black;
    background-color: white;
    color: black;
    font-weight: bolder;
  }
`;

// 삭제하기 버튼
const DeleteBtn = styled.button`
  width: 80px;
  height: 40px;
  font-size: 15px;

  border: 1px solid transparent;
  border-radius: 15px;
  background-color: black;
  color: white;

  &:hover {
    border: 3px solid black;
    background-color: white;
    color: black;
    font-weight: bolder;
  }
`;

// 개인 사진
const ImageBox = styled.div`
  border: 1px solid transparent;

  width: 170px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 태그+ 수정버튼 감싸는 div
const TagBox = styled.div`
  border: 1px solid transparent;

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
  border: 1px solid black;

  width: 800px;
  height: 40px;

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

// 여기서부터는 modal 관련된 내용입니다

// const MButtons = styled.div`
//   border: 1px solid transparent;

//   width: 600px;
//   height: 50px;
//   margin-top: 30px;

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;

const MButton = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 5px;
  margin-left: 12px;

  background: #00462a;
  border: #00462a;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;
`;

const CloseButton = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 5px;
  margin-left: 10px;

  background: #b4b3b3;
  border: #b4b3b3;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;
  margin-right: 10px;
`;

const AuthPic = styled.div`
  width: 600px;
  height: 350px;
  border-radius: 5px;
  border: 1.5px dashed #b4b3b3;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  color: #b4b3b3;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin: 40px;
`;

const ButtonWrapper = styled.div`
  width: 600px;
  height: 50px;
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-bottom: 30px;
  /* margin-right: 40px; */
`;

const ModalInput = styled.input`
  border: 1px solid black;
  margin-top: 40px;
  width: 600px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagInput = styled.input`
  border: 1px solid transparent;

  width: 600px;
  height: 80px;
`;
