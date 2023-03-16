import React from 'react';

function ProfilePage(props) {

    const handleClick = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <h1>Welcome to your profile, {props.username}!</h1>
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
                    <li onClick={handleClick}>
                        Friends: {props.friends}
                    </li>
                </ul>
            </p>
        </div>
    );
}

export default ProfilePage;