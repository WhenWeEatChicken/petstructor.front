import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import qs from 'qs';

import ChatDetailContainer from '../containers/ChatDetailContainer';
import ChatListContainer from '../containers/ChatListContainer';
import ChatCreateContainer from '../containers/ChatCreateContainer';

// import SockJS from 'sockjs-client';
// import * as Stomp from 'stompjs';
// const sockjs = new SockJS(url, _reserved, options);

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
  
  const { history, location } = props;
  const query = qs.parse(location, { ignoreQueryPrefix: true });

  const sectionArticleSelector = (query) => {
    console.log("sectionArticleSelector",  query);    
    switch(query.pathname){  
      case "/chat":
        const roomId = qs.parse(location.search, { ignoreQueryPrefix: true })?.room;
        return query.search.includes("room") === false ? "" : (<ChatDetailContainer roomId={roomId}/>);
      default:
        return "";
    }
  }
  
  return (
    <div>
      <SectionHeaderStyle>
        <h1> 채팅 </h1>
      </SectionHeaderStyle>
      <br />
      <h1>채팅 자리</h1>
      <SectionArticleStyle>
        <ChatListContainer />
        <ChatCreateContainer />
        {sectionArticleSelector(query)}
      </SectionArticleStyle>
        
    </div>
  );
}

export default withRouter(ChatView);
