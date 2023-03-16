                                                                
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginPage from './LoginPage';
import FriendListPage from './FriendListPage';
import ProfilePage from "./Profilepage";

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
             <div className="app">
          <div>

           {isLoggedIn ? (
             <ProfilePage friends ={friends} onLogout={handleLogout} />
           ) : (
             <FriendListPage username={username} onLogout={handleLogout} />
           )}
             {isLoggedIn ? (
                <ProfilePage
                  username={username}
                  name="Ritu Swami"
                  email="johndoe@example.com"
                  phone="555-1234"
                  address="123 Main St"
                  friends=""
                  />
           ) : (
             <LoginPage onLogin={handleLogin} className="loginpage" />
           )}
            </div>
           </div>
        </div>
      </header>
    </div>
  );
}

export default App;
