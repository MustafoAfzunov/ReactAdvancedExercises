import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

export const SearchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  const fetchPosts = useCallback(async (searchTerm) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`
    );
    const data = await response.json();
    setPosts(data);
  }, []);

  const debouncedFetch = useCallback(
    debounce((searchTerm) => fetchPosts(searchTerm), 300),
    [fetchPosts]
  );

  useEffect(() => {
    if (search) {
      debouncedFetch(search);
    }
  }, [search, debouncedFetch]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search posts..."
      />
      
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}; 