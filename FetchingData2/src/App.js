import React from 'react';
import UserPosts from './components/UserPosts';
import PaginatedUsers from './components/PaginatedUsers';
import SearchablePosts from './components/SearchablePosts';
import './styles.css';

function App() {
  return (
    <div className="App">
      <UserPosts />
      <PaginatedUsers />
      <SearchablePosts />
    </div>
  );
}

export default App;
