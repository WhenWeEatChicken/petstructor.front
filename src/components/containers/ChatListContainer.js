import React, {useState, useEffect} from 'react';
import { getChatroomsList } from '../../lib/api.js';
import ChatroomList from '../ChatroomList';

const ChatListContainer = () => {

  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchChatList = async () => {
      const fetchChatList = await getChatroomsList();
      setChatRooms(fetchChatList);
    }
    fetchChatList();
  }, []);

  if(chatRooms === []){
    return;
  }

  return <ChatroomList chatRooms={chatRooms} />
}

export default ChatListContainer;
