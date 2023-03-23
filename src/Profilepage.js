
import React from 'react';
import logo from './wp1810243.jpg';
import { Link } from 'react-router-dom';

function ProfilePage(props) {


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
                    </ul>
                    
                    <button className="login-btn" type="submit">
                        <Link to={{ pathname: "/friendlist", state: { friends: props.friends } }}> 
                            Frnds: {friendList}
                        </Link>
                    </button>   
                </p>    
        </div>
    );
}

export default ProfilePage;