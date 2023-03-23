import React from 'react';

function FriendPage(props) {
    const { name } = props.match.params;

    const friend = props.friends.find((friend) => friend.name === name);

    return (
        <div>
         <h1>Friend Page</h1>
        {friend ? (
            <div>
                <h2>{friend.name}</h2>
                <img src={friend.image} alt={friend.name} />
                <h3>{friend.status}</h3>
             </div>
        ) : (
            <div>
                <h2>Friend not found.</h2>
            </div>          
        )}
    </div>

  );
}

export default FriendPage;