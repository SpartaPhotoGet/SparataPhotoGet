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

  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [tagT, setTagT] = useState("");
  const [imgT, setImgT] = useState("");
  const [idArr, setIdArr] = useState([]);

  useEffect(() => {
    dispatch(__getContentById(feedId));
    setTagT(newTags);
  }, [dispatch, feedId, newTags]);

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

  const tagsOnchange = (e) => {
    const value = e.target.value;
    setTagT(value);
  };

  const onClickHome = () => {
    navigate(`../home`);
  };

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
            <UpdateBtn onClick={handleClick}>????????????</UpdateBtn>
            <MyModal
              isOpen={isOpen}
              feedId={feedId}
              onSubmit={handleModalSubmit}
              onCancel={handleModalCancel}
            />
            <DeleteBtn onClick={ClickDeleteBtn}>????????????</DeleteBtn>

            <FolderDelBtn onClick={onDeleteFolder}>????????????</FolderDelBtn>
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
                placeholder={"????????? ???????????????"}
                name="userContent"
                value={tagT}
                onChange={tagsOnchange}
                required
              />
              <SetUpdateBtn onClick={onClickUpdate}>????????????</SetUpdateBtn>
            </>
          ) : (
            <>
              <Tag>{newTags}</Tag>
              <UpdateBtn onClick={onClickUpdate}>????????????</UpdateBtn>
            </>
          )}
        </TagBox>
        <TagCom>
          <p>
            ?????? ?????? ?????? ??? ????????? ?????? ????????? ???????????? "#" ??????????????? ?????? ???
            ","??? ???????????? ???????????? ????????????.
          </p>
          <br></br>
          <Ex>??????: #??????, #????????????, #??????99, #??????????????????</Ex>
        </TagCom>
      </ImgContainer>
    </Layout>
  );
}

export default FolderPage;

// ??????, ??????, ?????? ??? ?????? div
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

// ??????????????? ???????????? div
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

// ??????+?????? ????????? ????????? ?????? div
const ButtonBox = styled.div`
  border: 1px solid transparent;

  width: 1150px;
  height: 50px;
  margin: auto;
  display: flex;
`;

// ??????+?????? ?????? ????????? div
const Buttons = styled.div`
  border: 1px solid transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
`;

// ???????????? ??????
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

// ???????????? ??????
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

// ???????????? ??????
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

// ?????? ?????? ??????
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

// home?????? ??????
// const HomeGoBtn = styled.button`
//   width: 120px;
//   height: 40px;
//   font-size: 20px;
//   margin-right: 10px;

//   border: 2px solid ${defaultStyle.color.subColor};
//   border-radius: 5px;
//   color: black;

//   &:focus {
//     border: 3px solid black;
//     border-color: ${defaultStyle.color.mainColor};
//     /* font-weight: bolder; */
//   }
// `;

// ?????? ??????
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

// ??????+ ???????????? ????????? div
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

// ?????? ?????? Box

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

//????????? ?????? input
const TagInput = styled.input`
  border: 2px solid ${defaultStyle.color.subColor};
  border-radius: 5px;

  margin-right: 5px;
  width: 600px;
  height: 40px;
`;

// ????????? ??????????????? ?????? div

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

// ???????????? 2???
const Ex = styled.div`
  font-size: 30px;
`;
