import React from 'react';
import { default as Card } from './card/CardTemplate';
import { withRouter } from 'react-router-dom';

const ChatroomList = (props) => {
  const {chatRooms, history} = props;
  
  const onClickCardItem = (id) => {
    console.log(`${history.location.pathname}?room=${id}`);
    history.push(`${history.location.pathname}?room=${id}`);
  }

  return (
    <>
      {chatRooms.map((chatroom, idx) => {
        return (
          <>
            <Card type="chatroom" card_contents={chatroom} key={`chatroom-${idx}`} onClick={() => {onClickCardItem(chatroom.roomId)}}/> <br/>
          </>
        );
      })}  
    </>
  );
}

export default withRouter(ChatroomList);
