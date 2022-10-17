import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Authentication/Login';
import Chat from './components/MainChat/Chat';
import NavBar from './components/UI/NavBar/NavBar';
import SignUp from './components/Authentication/Auth';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/register" element={<SignUp></SignUp>}/>
          <Route path="/chat" element={<Chat></Chat>}/>
        </Routes>
    </Router>
  );
};
export default App;


