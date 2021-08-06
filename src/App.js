import React from 'react';
import Tweet from './Tweet';

function App(){

    return(
    <div className="app">
      <Tweet name="Arsal" message="This is a random tweet" like="2"/>
      <Tweet name="Tanzeel" message="I am the true king" like="4"/>
      <Tweet name="Danish" message="50k my dues" like="3"/>
      <Tweet name="Noman" message="My new course is available" like="1"/>
    </div>
  );
}

export default App;