// import React, { useState } from "react";
// import styled from "styled-components";
// // import { FcCamera } from "react-icons/fc";
// import { useDispatch } from "react-redux";
// import { __getContentById, __updateTag } from "../redux/config/folderSlice";
// // import { useParams } from "react-router-dom";
// // import { __getContentById } from "../redux/config/folderSlice";

// function FolderItem111({ contents, feedId }) {
//   const dispatch = useDispatch();

//   const [isUpdateMode, setIsUpdateMode] = useState(false);

//   const [a, setA] = useState(contents.userTag);
//   console.log("잘들어온디", contents.userTag);

//   const onChangeTag = (e) => {
//     const inputValue = e.target.value;
//     setA(inputValue);
//   };

//   const cancelAndUpdateBtn = (contentId) => {
//     if (isUpdateMode) {
//       //버튼이 수정하기 일때

//       const payload = {
//         id: contentId,
//         userTag: a,
//       };
//       dispatch(__getContentById(feedId));
//       dispatch(__updateTag(payload));
//       setIsUpdateMode(!isUpdateMode);
//     } else {
//       // 버튼이 태그수정일때
//       setIsUpdateMode(!isUpdateMode);
//     }
//   };

//   // const params = useParams;
//   // const feedId = params.id;

//   // const contentData = useSelector((state) => state.folderSlice.contents);

//   // useEffect(() => {
//   //   dispatch(__getContentById(feedId));
//   // });

//   const onClickUpdateHandler = (e) => {
//     e.preventDefault();
//     alert("추가되었습니다");
//   };

//   const onClickDeleteHandler = (e) => {
//     e.preventDefault();
//     alert("삭제되었습니다");
//   };

//   // const dispatch = useDispatch();
//   // const params = useParams;
//   // const feedId = params.id;

//   return (
//     <>
//       <TagBox>
//         {isUpdateMode ? (
//           <Tag
//             minLength={4}
//             type={"text"}
//             placeholder={"태그를 적어주세요"}
//             name="userTag"
//             onChange={onChangeTag}
//             value={a}
//           />
//         ) : (
//           <Tag>{contents.userTag}</Tag>
//         )}
//         <CorBtn onClick={() => cancelAndUpdateBtn(contents.id)}>
//           {isUpdateMode ? "수정하기" : "태그수정"}
//         </CorBtn>
//       </TagBox>
//     </>
//   );
// }

// export default FolderItem111;

// // 전체 틀
// // const Container = styled.div`
// //   border: 1px solid black;

// //   width: 100%;
// //   height: 1300px;

// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// // 폴더, 버튼, 태그 다 감싼 div
// const ImgContainer = styled.div`
//   border: 1px solid #87ceeb;

//   width: 100%;
//   height: 1300px;
//   margin: auto;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// // 이미지들이 들어있는 div
// const Images = styled.div`
//   background-color: #87ceeb;

//   width: 1150px;
//   height: 750px;
//   margin: auto;

//   display: grid;
//   grid-template-rows: repeat(3, 250px);
//   grid-template-columns: repeat(5, 220px);
//   justify-content: center;
//   align-items: center;

//   overflow-y: auto;
// `;

// // 추가+삭제 버튼을 만들기 위한 div
// const ButtonBox = styled.div`
//   border: 1px solid transparent;

//   width: 1150px;
//   height: 50px;
//   margin: auto;
//   display: flex;
// `;

// // 추가+삭제 버튼 감싸는 div
// const Buttons = styled.div`
//   border: 1px solid transparent;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   margin-left: auto;
// `;

// // 추가하기 버튼
// const UpdateBtn = styled.button`
//   margin-right: 15px;
//   width: 100px;
//   height: 50px;
//   font-size: 20px;

//   border: 1px solid transparent;
//   background-color: black;
//   color: white;
//   border-radius: 15px;

//   &:hover {
//     border: 4px solid black;
//     background-color: white;
//     color: black;
//     font-weight: bolder;
//   }
// `;

// // 삭제하기 버튼
// const DeleteBtn = styled.button`
//   width: 100px;
//   height: 50px;
//   font-size: 20px;

//   border: 1px solid transparent;
//   background-color: black;
//   color: white;
//   border-radius: 15px;

//   &:hover {
//     border: 4px solid black;
//     background-color: white;
//     color: black;
//     font-weight: bolder;
//   }
// `;

// // 개인 사진
// const ImageBox = styled.div`
//   border: 1px solid transparent;

//   width: 220px;
//   height: 220px;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// // 태그+ 수정버튼 감싸는 div
// const TagBox = styled.div`
//   border: 1px solid black;

//   width: 1000px;
//   height: 150px;

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   margin: auto;
// `;

// // 태그 적는 Box

// const Tag = styled.input`
//   border: 1px solid black;

//   width: 850px;
//   height: 100px;

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;

// // 태그 수정을 위한 버튼입니다.
// const CorBtn = styled.button`
//   border: 1px solid transparent;
//   border-radius: 15px;
//   background-color: black;

//   color: white;
//   font-size: 30px;
//   margin-left: 15px;

//   width: 100px;
//   height: 100px;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &:hover {
//     border: 5px solid black;
//     background-color: white;
//     color: black;
//     font-weight: bolder;
//   }
// `;
