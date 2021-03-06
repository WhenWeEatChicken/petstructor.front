import React from 'react';

import BottomNav from './components/nav/BottomNav';
import AuthContainer from "./components/containers/AuthContainer"

import Routes from './config/Routes';

import styled from 'styled-components';


const AppContainerStyle = styled.div`
  .app-container {
    margin-left:5%;
    margin-right:5%;
  }
`;

const App = () => {
  return (
    <>
      <AppContainerStyle>
        <div className="app-container">
          <Routes></Routes>
        </div>
      </AppContainerStyle>
      <BottomNav />
      <AuthContainer />
    </>
    
  )
}

export default App;
