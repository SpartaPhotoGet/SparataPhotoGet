import styled from "styled-components";
import Layout from "../components/ui/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import defaultStyle from "../defaultStyle";
import { useState } from "react";
import FolderList from "../components/FolderList";
import TagList from "../components/TagList";
import AddFolderModal from "../components/AddFolderModal";
import { useDispatch } from "react-redux";
import { __searchFolder } from "../redux/modules/main";

function Home() {
  const [isModal, setIsModal] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const onSearchClick = () => {
    dispatch(__searchFolder(search));
  };

  const onModalClick = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <Layout>
      <HomeHeaderContainer>
        <SearchWrapper>
          <SearchInput
            placeholder="태그 검색하기"
            value={search}
            onChange={onChange}
          />
          <AiOutlineSearch onClick={onSearchClick} />
        </SearchWrapper>
      </HomeHeaderContainer>
      <HomeContainer>
        <FolderList onModalClick={onModalClick} />
        <TagList />
      </HomeContainer>
      {isModal && <AddFolderModal onModalClick={onModalClick} />}
    </Layout>
  );
}

export default Home;

const HomeHeaderContainer = styled.div`
  width: 100%;

  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  padding: 15px 0px;
  gap: 10px;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    right: 5px;
    cursor: pointer;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

const SearchInput = styled.input`
  border: 2px solid ${defaultStyle.color.subColor};
  padding: 10px;
  border-radius: 5px;
  font-size: ${defaultStyle.fontSize.small};

  &:focus {
    outline: none;
    border-color: ${defaultStyle.color.mainColor};
  }
`;

const HomeContainer = styled.div`
  display: flex;
  gap: 5px;
`;
