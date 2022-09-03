import React from 'react';
import Message from './components/UI/Message/MessageCard';

function App() {
  return (
    <div>
       <Message
        newMessage = 'how are you?'
       ></Message>
       <Message
        received = "ok"
       ></Message>
    </div>
  );
};

export default App;
