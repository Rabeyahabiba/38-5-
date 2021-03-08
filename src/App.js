
import { fireEvent } from '@testing-library/dom';
import { useEffect, useState } from 'react';
import './App.css';
import Friends from './components/Friends/Friends';

function App() {
  const [ friends, setFriends] = useState ([]);
  useEffect ( () => {
      fetch ('https://jsonplaceholder.typicode.com/users')
      .then (res => res.json())
      .then (data => setFriends(data))
  }, [])
  return (
    <div >
      <h4> Friends: {friends.length}</h4>
      {
        friends.map (friend => <Friends friend ={friend}></Friends>)
      }
    </div>
  );
}

export default App;
