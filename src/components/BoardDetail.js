import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';

// import * as Api from '../../lib/api';
import axios from 'axios';
import qs from 'qs';

const BoardDetail = (props) => {
  const {postIdx} = props;
  const [post, setPost] = useState({});
  
  const fetchPost = async () => {
    const response = await axios.get(`http://52.231.101.140:8080/posts/${postIdx}`);
    console.log("response.data", response.data);
    // JSON.stringify(posts)
    return response.data;
  }

  useEffect(() => {
    fetchPost().then(res => {
      setPost(res);
    })
  }, []);

  return (
    <div>
      보오드 디테일
      <h1> {post.title} </h1>
      <h1> {post.contents} </h1>
      <Link to="/board"> 뒤로 가기 </Link>
      {/* {posts.map((post, idx) => {
          return (
            <>
              <Card type="post" card_contents={post} key={`post-${idx}`} onClick={() => {onClickCardItem(post.idx)}}/> <br/>
            </>
          )
      })} */}
    </div>
  );
}

export default BoardDetail;
