import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';

// import * as Api from '../../lib/api';
import axios from 'axios';
import qs from 'qs';

const ChatDetail = (props) => {
  const {roomId} = props;
  const [chat, setChat] = useState({});
  
  const fetchChatRoom = async () => {
    
    const response = await axios.get(`http://52.231.101.140:8080/chat/room/${roomId}`);
    console.log("response.data", response.data);
    return response.data;
  }

  useEffect(() => {
    fetchChatRoom().then(res => {
      setChat(res);
    })
  }, []);

  return (
    <div>
      채팅 디테일
      <h1> {chat.roomId} </h1>
      <h1> {chat.name} </h1>
      {chat.contents}
      <Link to="/chat"> 뒤로 가기 </Link>
    </div>
  );
}

export default ChatDetail;