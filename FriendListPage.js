import React, { useState } from 'react';

function FriendListItem(props) {
    return (
        <div>
            <h2>{props.friend.name}</h2>
            <hp>{props.friend.status}</hp>
        </div>
    );
}

function FriendList(props) {
    const friendList = props.friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
    ));

    return (
        <div>
            {friendList}
        </div>
    );
}

function FriendListPage(props) {

    const [friends, setFriends] = useState([
        {name: 'Jone', status: 'Online'},
        {name: 'Jane', status: 'Offine'},
        {name: 'Bob', status: 'Online'},
    ]);

    const handleAddFriend = (friend) => {
        setFriends((prevFriends) => [...prevFriends, friend]);
    }

    return (
        <div>
            <h1>Welcome, {props.username}!</h1>
            <h2>Friend List</h2>
            <FriendList friends={friends} onAddFriend={handleAddFriend} />
        </div>
    );
}

export default FriendListPage;