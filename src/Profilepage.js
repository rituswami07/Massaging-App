import React from 'react';
import logo from './wp1810243.jpg';

function ProfilePage(props) {

    const handleClick = (event) => {
        event.preventDefault();
    }

    let friendList = [];
    if (Array.isArray(props.friends)) {
        friendList = props.friends.map((friend) => friend.name).join(",");
    }
    return (
        <div>
            <h1>Welcome to your profile, {props.username}!</h1>
            <img src={logo} alt="logo" className="img-2" />
            <p>Here's your profile information:
                <ul>
                    <li>
                        Name: {props.name}
                    </li>
                    <li>
                        Email: {props.email}
                    </li>
                    <li>
                        Phone: {props.phone}
                    </li>
                    <li>
                        Address: {props.address}
                    </li>
                    <li> Frnds: {friendList}
                    </li>
                </ul>
            </p>
        </div>
    );
}

export default ProfilePage;