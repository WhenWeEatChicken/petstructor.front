import React from 'react';
import styled from 'styled-components';

import BottomNavItem from './BottomNavItem';

const BottomNavContainerStyle = styled.div`
  nav.bottom-nav-container {
    position: fixed;
    bottom:0;
    width:100%;

    ul {
      list-style-type: none;
      padding-inline-start: 0px;
      
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20%, auto));
      column-gap: 10px;
      height: 50px;

      li {
        display:inherit;
        justify-items:center;
        align-items:center;
        background-color: antiquewhite;
      }
    }
  }
`;

function BottomNav() {
  return (
    <BottomNavContainerStyle>
      <nav className="bottom-nav-container">
        <ul>
          <BottomNavItem to="/board" name ="게시판"/>
          <BottomNavItem to="/chat" name ="코치챗"/>
          <BottomNavItem to="/about" name ="일단 어바웃"/>
          <BottomNavItem to="/my" name ="내정보"/>
        </ul>
      </nav>
    </BottomNavContainerStyle>
    
  )
}

export default BottomNav;
