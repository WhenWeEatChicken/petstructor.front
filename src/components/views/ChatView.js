import React from 'react'
import SockJS from 'sockjs-client'

// const sockjs = new SockJS(url, _reserved, options);

const ChatView = () => {
  const init = () => {
    const sock = new SockJS('http://52.231.101.140/ws-stomp');
    sock.onopen = function() {
      console.log('open');
      sock.send('test');
    };
 
    sock.onmessage = function(e) {
        console.log('message', e.data);
        sock.close();
    };
    
  }
  
  
  return (
    <div>
      <h1> 챗뷰 </h1>
    </div>
  );
}

export default ChatView
