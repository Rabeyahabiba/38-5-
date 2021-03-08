import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    
    const {friendId} = useParams ();
    const [friend, setFriend] = useState({}); 
    // as data object so empty {} //
    useEffect ( () =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch (url)
        .then (res => res.json())
        .then (data => setFriend(data));

    }, [])
    return (
        <div>
            <p> Friend Detail: {friendId}</p>
            <h3>{friend.name}</h3>
            <p>{friend.email} </p>
            <p> {friend.phone}</p>
           
        </div>
    );
};

export default FriendDetail;