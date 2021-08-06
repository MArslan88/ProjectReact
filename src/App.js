import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){
  const [users, setUsers] = useState([
    {name: "Arslan", message: "Hello there", like: "2"},
    {name: "Danish", message: "I am Danish Nisar", like: "1"},
    {name: "Tanzeel", message: "I am awesome", like: "5"}
  ]);

    return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} like={user.like} />
      ))}
    </div>
  );
}

export default App;