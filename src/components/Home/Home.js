import React, { useEffect, useState } from 'react';
import Friends from '../Friend/Friend';


const Home = () => {
    const [ friends, setFriends] = useState ([]);
    useEffect ( () => {
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setFriends(data))
    }, [])
    return (
        <div>
            <h4> Friends: {friends.length}</h4>
      {
        friends.map (friend => <Friends friend ={friend}></Friends>)
        
      }
        </div>
    );
};

export default Home;