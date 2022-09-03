import React from 'react';
import Message from './components/UI/Message/MessageCard';
import SendMessage from './components/SendMessage/SendMessage';

function App() {
  return (
    <div>
       <Message
        newMessage = 'how are you?'
       ></Message>
       <Message
        received = "ok"
       ></Message>

      <SendMessage></SendMessage>

    </div>
  );
};

export default App;
