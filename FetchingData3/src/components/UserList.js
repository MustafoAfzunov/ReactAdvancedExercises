import React, { useState, useEffect } from 'react';
import { useCache } from '../hooks/useCache';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const { fetchWithCache } = useCache();

  useEffect(() => {
    fetchWithCache('https://jsonplaceholder.typicode.com/users')
      .then(setUsers);
  }, [fetchWithCache]);

  const handleUserClick = async (userId) => {
    const userData = await fetchWithCache(`https://jsonplaceholder.typicode.com/users/${userId}`);
    setSelectedUser(userData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} onClick={() => handleUserClick(user.id)}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <pre>{JSON.stringify(selectedUser, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
