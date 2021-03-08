import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const {name ,email, id} = props.friend;
    const friendStyle ={
        border : '1px solid purple',
        margin : '20px',
        padding : '20px',
        borderRadius : '20px',
    }
    return (
        <div style ={friendStyle}>
            <h2> Name : {name}</h2>
            <p> email : {email} </p>
             <Link to={`/friend/${id}`}> 
             <button>Show Detail of :{id} </button>
             </Link>

        </div>
    );
};

export default Friends;