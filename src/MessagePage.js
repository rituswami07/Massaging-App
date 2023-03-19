import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function MessagePage(props) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");


    const handleNewMessage = (event) => {
        setNewMessage(event.target.value);
    };

const handleSendMessage = () => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setNewMessage("");
  };

  const messageList = messages.map((message, index) => (
      <div key={index}>{message}</div>
  ));

  return (
      <div>
          <h1>Welcome to the Messaging page, {props.name}!</h1>
          <div>{messageList}</div>
          <input type="text" value={newMessage} onChange={handleNewMessage} />
          <button onClick={handleSendMessage}>Send</button>
      </div>
  );
}

export default MessagePage;