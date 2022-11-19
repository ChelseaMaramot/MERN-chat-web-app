import React from 'react';
import ReactDOM from "react-dom/client";
import Login from './components/Authentication/Login';
import Chat from './components/ChatDashboard';
import Auth from './components/Authentication/Auth';
import NavBar from './components/UI/NavBar/NavBar';
import Sidebar from './components/Sidebar';
import SideNavbar from './components/SideNavbar';


function App() {
  return (
    <React.Fragment>
      <Chat></Chat>
    </React.Fragment>
  );
}

export default App;


