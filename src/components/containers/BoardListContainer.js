import React, {useState, useEffect, useCallback} from 'react';

import { getPosts } from '../../lib/api';

import BoardList from '../BoardList';

const BoardListContainer = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchPosts = await getPosts();
      setPosts(fetchPosts);
    }
    fetchData();
  }, []);
  
  if(posts === []){
    return null;
  }

  return (
    <> <BoardList posts={posts}/> </>
  );
}

export default BoardListContainer;
