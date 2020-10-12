import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// import * as Api from '../../lib/api';
import axios from 'axios';
import qs from 'qs';

import BoardDetail from '../BoardDetail';
import BoardList from '../BoardList';
import BoardCreate from '../BoardCreate';

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
  const [posts, setPosts] = useState([]);
  const { location } = props;
  const query = qs.parse(location, { ignoreQueryPrefix: true });

  const fetchPosts = async () => {
    const response = await axios.get("http://52.231.101.140:8080/posts");
    console.log("response.data.content", response.data.content);
    // JSON.stringify(posts)
    // posts.push(...response.data.content); 
    // await setPosts(posts);
    // console.log("posts", posts);
    return response.data.content;
  }

  const sectionArticleSelector = (query) => {
    console.log("sectionArticleSelector",  query);
    switch(query.pathname){  
      case "/board":
        const postIdx = qs.parse(location.search, { ignoreQueryPrefix: true })?.post;
        return query.search.includes("post") === false ? (<BoardList posts={posts}/>) : (<BoardDetail postIdx={postIdx}/>);
      case "/board/create":
        return <BoardCreate />;
      default:
        return <BoardList posts={posts}/>;
    }
  }

  useEffect(() => {
    fetchPosts().then(res => {
      setPosts(res);
    })
  }, []);
  
  return (
    <div>
      <SectionHeaderStyle>
        <h1>게시판 </h1>
      </SectionHeaderStyle>
      <SearchBarContainerStyle className="search-bar" placeholder="무엇이 궁금하신가요?"/ >
      <br />
      <h1>게시글 자리</h1>
      <SectionArticleStyle>
        {console.log("사랑해요 연예가 중계 board", posts)}
        {console.log("query", query.post)}
        {sectionArticleSelector(query)}
        <br/>
      </SectionArticleStyle>
        
    </div>
  );
}

export default BoardView;
