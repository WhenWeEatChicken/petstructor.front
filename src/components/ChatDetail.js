import React, {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const ChatDetail = (props) => {
  const {chatroom, roomId, onSendMessage} = props;
  
  const [chatMessage, setChatMessage] = useState("");

  const handleChangeChatMessage = useCallback((e) => {
    setChatMessage(e.target.value);
  });

  const handleSendMessage = useCallback(() => {
    onSendMessage(chatMessage);
  }, [chatMessage, onSendMessage]);

  return (
    <div>
      채팅 디테일
      <h1> {roomId} </h1>
      {/* <h1> {chat.name} </h1>
      {chat.contents} */}
      <input type="text" name="chatMessage" placeholder="메시지를 입력하세요" onChange={handleChangeChatMessage} /><br/>
      <button onClick={handleSendMessage}> 보내기 </button><br />
      <Link to="/chat"> 뒤로 가기 </Link>
    </div>
  );
}

export default ChatDetail;