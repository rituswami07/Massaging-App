import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import logo from './download.jpeg';
import logo2 from './download (1).jpeg';
import logo3 from './download (2).jpeg';
import logo4 from './download (3).jpeg';

function FriendListItem(props) {
    console.log('friend', props.friend); //add this line


    const handleAddFriend = () => {
        console.log('add friend button clicked'); //add this line 
        props.onAddFriend(props.friend)
    }; 
    return (
        <div>
            <h2 className="frnd-name">{props.friend.name}</h2>
            <img src={props.friend.image} alt={props.friend.name} className="frnd-img" />
            <h2>{props.friend.status}</h2>    
            <button onClick={handleAddFriend}>Add Friend</button>
        </div>
    );
}

function FriendList(props) {
    console.log('friend:', props.friends); //add this line
    console.log('onAddFriend:', props.onAddFriend); //add this line


    const friendList = props.friends.map((friend) => (
        <FriendListItem
         key={friend.id} 
         friend={friend}
         onAddFriend={props.onAddFriend} />
    ));

    return (
        <div>
            {friendList}
        </div>
    );
}

function FriendListPage(props) {

    const [friends, setFriends] = useState([
        {name: 'Jone', status: 'Online', image: logo },
        {name: 'Jane', status: 'Offine', image: logo2 },
        {name: 'Bob', status: 'Online', image: logo3 },
        {name: 'Divya', status: 'Online', image: logo4 },
    ]);

    const handleAddFriend = (friend) => {
        console.log('add friend:', friend); //add this line
        setFriends((prevFriends) => [...prevFriends, friend]);
    }

     console.log('friend:', friends); //add this line

    return (
        <div className="frndlist">
            <h1>Welcome, {props.username}!</h1>
            <h2>Friend List</h2>
            <FriendList className="frnd" friends={friends} onAddFriend={handleAddFriend} />
        </div>
    );
}

export default FriendListPage;