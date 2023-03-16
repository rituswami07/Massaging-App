import { isFocusable } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import logo from './Default_ProfilePicture.png';

function LoginPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

 /*
  const handleUsernameChange = (event) => {
      setUsername(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
      setPassword(event.target.value);
  };

  */
  const handleSubmit = (event) => {
      event.preventDefault();
      if (username === "" || password === "") {
          setErrorMessage("Please enter a valid username and password.");
      } else if (username !== "Ritu" || password !== "password") {
          setErrorMessage("Invaid username or password.");
      } else {
          props.onLogin(username);
      }
  };


 
  return (
      <div className="login">
          <h1>Login</h1>
               <img src={logo} className="logo-img" alt="logo"/>
           {errorMessage && <p>{errorMessage}</p>}
           <form onSubmit={handleSubmit}>
               <div>
                   <input className="input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
               </div>
               <br />
               <div>
                   <input className="input" type="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
               </div>
                   <button className="loginbtn" type="submit">Login</button>

           </form>
      </div>
   );
  }

  export default LoginPage;