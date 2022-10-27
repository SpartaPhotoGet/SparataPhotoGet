import styled from "styled-components";
import defaultStyle from "../defaultStyle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getTags } from "../redux/modules/main";

// TODO: 태그뱃지 만들기

function TagList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getTags());
  }, [dispatch]);
  const { tags, myTags, isLoadig, error } = useSelector(
    (state) => state.tagReducer
  );

  let sortMytags = Object.entries(myTags).sort((a, b) => b[1] - a[1]);
  return (
    <TagsContainer>
      <TagsWrapper>
        <TagsTitle>태그 Top</TagsTitle>
        {tags?.map((tag, i) => (
          <TagName key={i}>
            {i + 1}위 {tag}
          </TagName>
        ))}
      </TagsWrapper>
      <TagsWrapper>
        <TagsTitle>내 태그 Top</TagsTitle>
        {sortMytags?.map((tag, i) => (
          <TagName key={i}>
            {tag[0]}: {tag[1]}
          </TagName>
        ))}
      </TagsWrapper>
    </TagsContainer>
  );
}

export default TagList;

const TagsContainer = styled.div`
  width: 200px;
  height: 100%;
  padding: 20px;
  border: 2px dashed ${defaultStyle.color.mainColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TagsWrapper = styled.div`
  width: 100%;
`;

const TagsTitle = styled.h2`
  font-size: ${defaultStyle.fontSize.medium};
  margin-bottom: 5px;
`;

const TagName = styled.h3`
  font-size: ${defaultStyle.fontSize.small};
`;
