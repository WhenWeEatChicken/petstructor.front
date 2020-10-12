import React from 'react';
import { default as Card } from '../card/CardTemplate';

function MyView() {
  return (
    <>
      <h1>마이</h1>
      <br/>
      <h3> 나의 프로필 </h3>
      <Card type="profile" />
      <br />
      <h3> 피드백 </h3>
      <Card type="feedback" />
    </>
  )
}

export default MyView;
