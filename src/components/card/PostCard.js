import React from 'react'
import styled, { css } from 'styled-components';

const PostCardContainerStyle = styled.div`
  .card-post-container{
  }
`;

const PostCard = (props) => {
  const { card_contents } = props;
  // const query = qs.parse(history.search, { ignoreQueryPrefix: true });
  console.log("post card props", props);
  
  return (
    <>
      <PostCardContainerStyle className="card-post-container">
        <h3>{card_contents.idx}:{card_contents.title}</h3>
        {card_contents.contents}
      </PostCardContainerStyle>
    </>
  )
}

export default PostCard;