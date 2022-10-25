import { FcOpenedFolder } from "react-icons/fc";
import { BsPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import defaultStyle from "../defaultStyle";
import { useEffect } from "react";
import { __getFolders } from "../redux/modules/main";

function FolderList({ onModalClick }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getFolders());
  }, [dispatch]);

  const { folders, isLoading, error } = useSelector(
    (state) => state.folderReducer
  );

  return (
    <FoldersContainer>
      <IconBox bsPlus={true} onClick={onModalClick}>
        <BsPlus className="bsPlus" size={150} />
      </IconBox>
      {folders?.map((folder) => (
        <FolderWrapper key={folder.id}>
          <IconBox>
            <FcOpenedFolder size={150} />
          </IconBox>
          <FolderTitle>{folder.folderName}</FolderTitle>
        </FolderWrapper>
      ))}
    </FoldersContainer>
  );
}

export default FolderList;

const FoldersContainer = styled.div`
  width: 100%;
  padding: 30px;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: min-content;
  border: 2px dashed ${defaultStyle.color.mainColor};
  border-radius: 5px;
`;

const FolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`;

const IconBox = styled.div`
  cursor: pointer;
  margin: 0 auto;
  color: ${(props) => props.bsPlus && defaultStyle.color.subColor};
  transition: 0.1s ease-in-out;

  &:hover {
    color: ${(props) => props.bsPlus && defaultStyle.color.mainColor};
  }
`;

const FolderTitle = styled.h3``;
