import React from 'react';
import logo from './logo.svg';
import './App.css';

import AboutView from './components/views/AboutView';
import HomeView from './components/views/HomeView';
import ChatView from './components/views/ChatView';
import BottomNav from './components/nav/BottomNav';

import { Route } from 'react-router-dom';
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
          <Route path="/" component={HomeView} exact={true} />
          <Route path="/about" component={AboutView} />
          <Route path="/chat" component={ChatView} />
        </div>
      </AppContainerStyle>
      <BottomNav />
    </>
    
  )
}

export default App;
