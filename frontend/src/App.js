import React from 'react';
import Message from './components/UI/Message/MessageCard';
import SendMessage from './components/SendMessage/SendMessage';
import NavBar from './components/UI/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
       <Message
        newMessage = 'how are you?'
       ></Message>
      <SendMessage></SendMessage>

    </div>
  );
};

export default App;
