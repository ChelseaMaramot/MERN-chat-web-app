import React from 'react';
import ReactDOM from "react-dom/client";
import Login from './components/Authentication/Login';
import Chat from './components/MainChat/Chat';
import Auth from './components/Authentication/Auth';
import NavBar from './components/UI/NavBar/NavBar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;


