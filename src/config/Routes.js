import React from 'react'
import { Route } from 'react-router-dom';

import AboutView from '../components/views/AboutView';
import HomeView from '../components/views/HomeView';
import ChatView from '../components/views/ChatView';
import BoardView from '../components/views/BoardView';
import MyView from '../components/views/MyView';
import AuthView from '../components/views/AuthView';

function Routes() {
  return (
    <>
      <Route path="/" component={HomeView} exact={true} />
      <Route path="/Board" component={BoardView} />
      <Route path="/chat" component={ChatView} />
      <Route path="/about" component={AboutView} />
      <Route path="/my" component={MyView} cardType="profile"/>
      <Route path="/auth" component={AuthView} />
    </>    
  )
}

export default Routes
