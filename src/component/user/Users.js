import React, { useState } from 'react';
import './Users.css'
const Users = (props) => {
    const {name, email, picture, phone, gender} = props.user
    // console.log(name.first)
    const [displayNumber, setDisplayNumber]  = useState(''); // for show random users number......
    const showPhone= () => setDisplayNumber(phone);
    const fullName = name.first + ' ' + name.last;
    const addMembers = props.addMembers;
    return (
        <div className="full_container">
            <div className="img">
                <img src={picture.large} alt=""/>
            </div>
            <div className="container">
                <h2>Name: {fullName}</h2>
                <p>Email: {email}</p>
                <p>Gender: {gender}</p>
                <p>Phone: {displayNumber}</p>
                <button onClick={showPhone} className ='btn'>Show phone number</button>
                <button onClick={ () => addMembers(fullName)} className='btn'>Add members</button>
            </div>
        </div>
    );
};

export default Users;