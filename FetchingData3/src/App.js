import React from 'react';
import { UserList } from './components/UserList';
import { SearchPosts } from './components/SearchPosts';
import { InfinitePosts } from './components/InfinitePosts';
import './App.css';

export const App = () => {
  return (
    <div className="container">
      <section className="section">
        <h1 className="section-title">User List</h1>
        <UserList />
      </section>
      
      <section className="section">
        <h1 className="section-title">Search Posts</h1>
        <SearchPosts />
      </section>
      
      <section className="section">
        <h1 className="section-title">Infinite Posts</h1>
        <InfinitePosts />
      </section>
    </div>
  );
};

export default App; 