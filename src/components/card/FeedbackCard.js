import React from 'react';
import CardTemplate from './CardTemplate';

import styled from 'styled-components'
const FeedbackCardContainerStyle = styled.div`

`

const FeedbackCard = () => {
  return (
    <>
      <div style={{'border':'solid'}}>이미지</div>
      <FeedbackCardContainerStyle className="card-feedback-container">
        <div> 코치 한마디</div>
        <div>설명</div>
      </FeedbackCardContainerStyle>
    </>
  )
}

export default FeedbackCard;
