import React from 'react';
import { default as Card } from './card/CardTemplate';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BoardList = (props) => {
  const {history, posts} = props;

  const onClickCardItem = (idx) => {
    history.push(`${history.location.pathname}?post=${idx}`);
  }

  return (
    <>
      {posts.map((post) => {
          return (
            <>
              <Card type="post" card_contents={post} key={post.idx} onClick={() => {onClickCardItem(post.idx)}}/> <br/>
            </>
          )
        })}
        <Link to="/board/create"> 글쓰기 </Link>
    </>
  );
}

export default withRouter(BoardList);
