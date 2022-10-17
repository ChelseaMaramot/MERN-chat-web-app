import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Authentication/Login';
import Chat from './components/MainChat/Chat';
import Auth from './components/Authentication/Auth';
import NavBar from './components/UI/NavBar/NavBar';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Auth></Auth>}/>
          <Route path="/chat/:user" element={<Chat></Chat>}/>
        </Routes>
    </Router>
  );
};
export default App;


