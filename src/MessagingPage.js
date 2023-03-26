import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';

/*
function MessagingPage(props) {
    const { friendId } = useParams();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInputChange = (event) => {
    setMessage(event.target.value);
    };

    const handleSendClick = (friend) => {
        // TODO: Send message to the selected friend using friend's info and message contebt
        console.log(`Sending message "${message}" to friend ${friend.id}`);
        
         setMessage('');

    };
        
    const messageList = messages.map((msg, index) => (
        <div key={index}>
            <p>{msg.sender}: {msg.content}</p>
            </div>
    ));
  
       
        const sendFriendMessage = (friendId, message) => {
            // Placeholder function that simply logs the message to the console
        
        console.log(`Sending message "${message}" to friend ${friendId}`);
    };
    

    return (
        <div>
            <h1>Messaging with friend {friendId}</h1>
            <p>Type your message:</p>
            <input type="text" value={message} onChange={handleInputChange} />
            <button onClick={() => handleSendClick(props.friend)}>Send</button>
        </div>
    );
}
 */
 
 
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
          <div className="msg-list">{messageList}</div>
          <input type="text" value={newMessage} onChange={handleNewMessage} />
          <button onClick={handleSendMessage}>Send</button>
      </div>
  );
} 

export default MessagePage;