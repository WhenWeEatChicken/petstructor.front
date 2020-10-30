import React from 'react';
import ChatCreate from '../ChatCreate';
import {createChatroom} from '../../lib/api.js';

import swal from 'sweetalert';

const ChatCreateContainer = () => {
  const onCreate = async (chatroomName) => {

    await createChatroom(chatroomName)
      .then((resolve) => {
        console.log(resolve)
        swal("채팅룸이 생성 되었습니다", { icon: "success" })
        .then(()=> {
          console.log(resolve.roomId)
          // window.location.href = `/chat/${resolve.roomId}`;
        });
      })
      .catch((error) => {
        swal(error.response.body, { icon: "error" });
      });
  }

  return <ChatCreate onCreate={onCreate}/>;
}

export default ChatCreateContainer;
