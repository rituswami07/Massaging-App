                                                                
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route,Link, } from "react-router-dom";
import './App.css';
import LoginPage from './LoginPage';
import FriendListPage from './FriendListPage';
import ProfilePage from "./Profilepage";
import MessagingPage from './MessagingPage';

function App() { 
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [username, setUsername] = useState("");
   const [friend, setFriend] = useState({id:'', name: ''});

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
              <Router>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Profile</Link>
                      </li>
                  </ul>
                 </nav> 
                 <Route exact path="/">
                <ProfilePage
                  username={username}
                  name="Ritu Swami"
                  email="johndoe@example.com"
                  phone="555-1234"
                  address="123 Main St"
                  friendlist="/frindlist" 
                  />
                </Route>  
                <Route path="/friendlist">
                  <FriendListPage
                  username={username}
                  onLogout={handleLogout}
                  />
                  </Route>
                  <Route path="/messaging/:friendId">
                    <MessagingPage
                    friend={friend}
                    onSendMessage={(message) => console.log(`Sending message "${message}" to friend ${friend.id}`)} />
                  </Route>
              </Router>  
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
