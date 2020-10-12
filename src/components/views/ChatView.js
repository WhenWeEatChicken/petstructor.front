import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import axios from 'axios';
import qs from 'qs';

import ChatDetail from '../ChatDetail';

// import SockJS from 'sockjs-client';
// import * as Stomp from 'stompjs';
// const sockjs = new SockJS(url, _reserved, options);

import { default as Card } from '../card/CardTemplate';

const SearchBarContainerStyle = styled.input`
  width: 100%;
  height: 50px;
  background-color:whitesmoke;
`

const SectionHeaderStyle = styled.div`
  width:100%;
  margin-bottom: 5%;
`
const SectionArticleStyle = styled.div`
  width:100%;
  margin-bottom:5%;
`

const ChatView = (props) => {
  const [chatRooms, setChatRooms] = useState([]);
  const { history, location } = props;
  const query = qs.parse(location, { ignoreQueryPrefix: true });

  const fetchChatRooms = async () => {
    const response = await axios.get("http://52.231.101.140:8080/chat/rooms");
    console.log("response.data", response.data);
    return response.data;
  }

  useEffect(() => {
    fetchChatRooms().then(res => {
      setChatRooms(res);
    })
  }, []);

  const onClickCardItem = (id) => {
    console.log(id);
    console.log(`${history.location.pathname}?room=${id}`);
    history.push(`${history.location.pathname}?room=${id}`);
  }

  const sectionArticleSelector = (query) => {
    console.log("sectionArticleSelector",  query);    
    switch(query.pathname){  
      case "/chat":
        const roomId = qs.parse(location.search, { ignoreQueryPrefix: true })?.room;
        return query.search.includes("room") === false ? "" : (<ChatDetail roomId={roomId}/>);
      default:
        return "";
    }
  }

  // const init = () => {
    // const sock = new SockJS('ws://52.231.101.140:8080/ws-stomp');
    // const ws = Stomp.overWS(sock);
    // http://52.231.101.140:8080/chat/room
    //   ws.connect({}, function(frame) {
    //     ws.subscribe("/sub/chat/room/"+vm.$data.roomId, function(message) {
    //         var recv = JSON.parse(message.body);
    //         vm.recvMessage(recv);
    //     });
    //     ws.send("/pub/chat/message", {}, JSON.stringify({type:'ENTER', roomId:vm.$data.roomId, sender:vm.$data.sender}));
    // }, function(error) {
    //   sock.onopen = function() {
    //     console.log('open');
    //     const url = "http://52.231.101.140:8080/pub/chat/message";
        
    //     sock.send(url, {}, JSON.stringify({type:'TALK', roomId:this.roomId, sender:this.sender, message:this.message}));
    //     sock.send('test');
    //   };
  
    //   sock.onmessage = function(e) {
    //       console.log('message', e.data);
    //       sock.close();
    //   };

    // }
    // init();
  
  return (
    <div>
      <SectionHeaderStyle>
        <h1> 채팅 </h1>
      </SectionHeaderStyle>
      <br />
      <h1>채팅 자리</h1>
      <SectionArticleStyle>
        {console.log(" 사랑해요 연예가 중계 채팅 ", chatRooms)}
        {chatRooms.map((chatroom, idx) => {
          return (
            <>
              <Card type="chatroom" card_contents={chatroom} key={`chatroom-${idx}`} onClick={() => {onClickCardItem(chatroom.roomId)}}/> <br/>
            </>
          )
        })}
        <br/>
        {sectionArticleSelector(query)}
      </SectionArticleStyle>
        
    </div>
  );
}

export default withRouter(ChatView);
