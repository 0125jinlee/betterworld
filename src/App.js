import React from 'react';

import Post from './components/Post/Post';
import Search from './components/Search/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Donations for the Beginners</h1>
      <Search />
      <Post />
    </div>
  );
}

export default App;
