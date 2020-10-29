import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import qs from 'qs';

import BoardListContainer from '../containers/BoardListContainer';
import BoardCreateContainer from '../containers/BoardCreateContainer';

import BoardDetail from '../BoardDetail';

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

const BoardView = (props) => {
  
  const { location } = props;
  const query = qs.parse(location, { ignoreQueryPrefix: true });

  

  const sectionArticleSelector = (query) => {
    console.log("sectionArticleSelector",  query);
    switch(query.pathname){  
      case "/board":
        const postIdx = qs.parse(location.search, { ignoreQueryPrefix: true })?.post;
        return query.search.includes("post") === false ? (<BoardListContainer />) : (<BoardDetail postIdx={postIdx}/>);
      case "/board/create":
        return <BoardCreateContainer />;
      default:
        return <BoardListContainer />;
    }
  }
  
  return (
    <div>
      <SectionHeaderStyle>
        <h1>게시판 </h1>
      </SectionHeaderStyle>
      <SearchBarContainerStyle className="search-bar" placeholder="무엇이 궁금하신가요?"/ >
      <br />
      <h1>게시글 자리</h1>
      <SectionArticleStyle>
        {console.log("query", query.post)}
        {sectionArticleSelector(query)}
        <br/>
      </SectionArticleStyle>
        
    </div>
  );
}

export default BoardView;
