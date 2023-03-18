                                                                
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginPage from './LoginPage';
import FriendListPage from './FriendListPage';
//mohit
function App() { 
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [username, setUsername] = useState("");

   const handleLogin = (username) => {
     setUsername(username);
     setIsLoggedIn(true);
   };

   const handleLogout = () => {
     setIsLoggedIn(false);
     setUsername("");
   };
  

  return ( 
    
    <div className="App">
      <header className="App-header">
        <div className="Box">
          <div className="Left-box">
             <div className="app">
          <div>
            {isLoggedIn ? (
             <FriendListPage username={username} onLogout={handleLogout} />
           ) : (
             <LoginPage onLogin={handleLogin} className="loginpage" />
           )}
           </div>
            </div>
           </div>
          <div className="Right-box">
            Jin
          </div>
          Bts
        </div>
      </header>
    </div>
  );
}

export default App;
