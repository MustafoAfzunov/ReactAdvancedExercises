import React, { useState, useEffect } from 'react';

const UserPosts = () => {
  const [userId, setUserId] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
          setPosts(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
          setLoading(false);
        });
    }
  }, [userId]);

  return (
    <div className="user-posts">
      <h2>User Posts</h2>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter user ID"
      />
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="posts-list">
          {posts.map(post => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPosts; 