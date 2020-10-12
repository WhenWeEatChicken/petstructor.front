import React from 'react'
import styled, { css } from 'styled-components';
import CardTemplate from './CardTemplate';

const ProfileCardContainerStyle = styled.div`
  .card-profile-container{
  }
`; 

const ProfileCard = () => {
  return (
    <>
        <div style={{'border':'solid'}}>이미지</div>
        <ProfileCardContainerStyle className="card-profile-container">
          <div> 이름</div>
          <div>설명</div>
        </ProfileCardContainerStyle>
      
    </>
  )
}

export default ProfileCard;
