import React from 'react';
import styled from 'styled-components';

import ProfileCard from './ProfileCard';
import FeedbackCard from './FeedbackCard';
import PostCard from './PostCard';
import ChatRoomCard from './ChatRoomCard'

const CardTemplateStyle = styled.div`
  width:100%;
  background-color: whitesmoke;

  display:grid;
  height: 150px;
  grid-template-columns: 1fr 3fr;
`;

const cardSelect = (type, card_contents = "") => {
  switch(type){
    case "profile": return <ProfileCard card_contents={card_contents} />;
    case "feedback": return <FeedbackCard card_contents={card_contents}/>;
    case "post": return <PostCard card_contents={card_contents}/>;
    case "chatroom": return <ChatRoomCard card_contents={card_contents} />
    default: return null;
  }
}

const CardTemplate = (props) => {
  const {type, card_contents, onClick} = props;
  
  return (
    <CardTemplateStyle onClick={onClick}>
      {(cardSelect(type, card_contents))}
    </CardTemplateStyle>
  )
}

export default CardTemplate;
