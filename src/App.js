import React from 'react';

import Post from './components/Post/Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Donations for the Beginners</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
