import React from 'react'
import styled from 'styled-components';

const HomeContainerStyle = styled.div`
  width:100%;
  height:800px;
  display:grid;
  justify-items:center;
  align-items:center; 
`

const HomeView = () => {
  return (
    <div>
      <h1> 홈 </h1>
      <HomeContainerStyle>
        로고 자리
      </HomeContainerStyle>
    </div>
  )
}

export default HomeView
