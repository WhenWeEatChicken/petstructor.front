import React, {useState, useEffect, useCallback} from 'react';

import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs'; //이거 보니까 deprecate 된 프로젝트임. 수정 필요가 있겠음.

import {getChatroom} from '../../lib/api.js';

import ChatDetail from '../ChatDetail';

const ChatDetailContainer = (props) => {
  const {roomId} = props;

  const [chatroom, setChatroom] = useState([]);
  const [sock, setSock] = useState(new SockJS("http://52.231.101.140:8080/ws-stomp"));
  const [ws, setWs] = useState(Stomp.over(sock));
  
  useEffect(() => {
    console.log("chatDetailContainer mounted");
    const fetchChatroom = async () => {
      const fetchChatroom = await getChatroom(roomId);
      setChatroom(fetchChatroom);
      await console.log("chatroom", fetchChatroom);
    }
    fetchChatroom();
    initChat();
  }, []);
  
  if(chatroom === []){
    return;
  }

  const initChat = () => {
    console.log("initChat on", roomId);
    ws.connect({}, function(frame) {
      ws.subscribe(`http://52.231.101.140:8080/sub/chat/room/${roomId}`, function(message) {
          let recv = JSON.parse(message.body);
          console.log(recv);
          recvMessage(recv);
      });
      ws.send("http://52.231.101.140:8080/pub/chat/message", {}, JSON.stringify({type:'ENTER', roomId:roomId, sender:"나"}));
    });
  }

  const onSendMessage = (message) => {
    ws.send("/pub/chat/message", {}, JSON.stringify({type:'TALK', roomId:roomId, sender:"나", message:message}));
  }

  const recvMessage = (recv) => {
    this.messages.unshift({"type":recv.type, "sender":recv.type=='ENTER'?'[알림]':recv.sender,"message":recv.message})
  }

  

  return <ChatDetail chatroom={chatroom} roomId={roomId} onSendMessage={onSendMessage}/>
}

export default ChatDetailContainer;
