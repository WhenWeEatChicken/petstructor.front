import React from 'react';
import logo from './logo.svg';
import './App.css';

import AboutView from './components/views/AboutView';
import HomeView from './components/views/HomeView';
import ChatView from './components/views/ChatView';

import Header from './components/header/Header';

import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/" component={HomeView} exact={true} />
      <Route path="/about" component={AboutView} />
      <Route path="/chat" component={ChatView} />
    </div>
  )
}

export default App;
