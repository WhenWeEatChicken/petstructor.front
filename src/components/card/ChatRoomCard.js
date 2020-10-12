import React from 'react';
import styled, { css } from 'styled-components';

const ChatRoomCardContainerStyle = styled.div`
  .card-chatroom-container{
  }
`; 

const ChatRoomCard = (props) => {
  console.log("ChatRoomCard props", props)
  const { card_contents } = props;
  return (
    <ChatRoomCardContainerStyle className="card-chatroom-container">
      <h3>{card_contents.name}</h3>
      {console.log(card_contents.chatMessages)}
      {card_contents.chatMessages.length === 0 ? "채팅이 없습니다" : card_contents.chatMessages}
    </ChatRoomCardContainerStyle>
  )
}

export default ChatRoomCard;