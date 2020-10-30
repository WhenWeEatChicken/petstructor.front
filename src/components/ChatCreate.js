import React, {useState, useCallback} from 'react';

const ChatCreate = (props) => {
  const {onCreate} = props;
  const [chatroomName, setChatroomName] = useState("");

  const handleChangeChatroomName = useCallback((e) => {
    setChatroomName(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onCreate(chatroomName);
  }, [chatroomName, onCreate]);

  return (
    <form onSubmit={handleSubmit}>
      채팅방 이름 : <input type="text" name="chatName" onChange={handleChangeChatroomName}/>
      <button> 만들기 </button>
    </form>
  );
}

export default ChatCreate;
