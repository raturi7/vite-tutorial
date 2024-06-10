import React, { useEffect, useState } from 'react';
import { fetchUsers, updateUser } from '../axios/api';

const View = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const users = await fetchUsers();
        setUsers(users);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    loadUsers();
  }, []);

  const handleUpdateUser = async (userId) => {
    try {
      const updatedUser = users.find(user => user._id === userId);
      if (!updatedUser) {
        console.error("User not found for update");
        return;
      }

      await updateUser(userId, updatedUser);
      setEditingUser(null); // Exit edit mode
      // Refresh user list after update
      const updatedUsers = await fetchUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const handleEditUser = (userId) => {
    setEditingUser(userId);
  };

  const handleInputChange = (event, field) => {
    const updatedUsers = users.map(user => {
      if (user._id === editingUser) {
        return { ...user, [field]: event.target.value };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>Axios User List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>University</th>
            <th>Marks</th>
            <th>Job Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                {editingUser === user._id ? (
                  <input
                    type="text"
                    value={user.name}
                    onChange={(event) => handleInputChange(event, 'name')}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingUser === user._id ? (
                  <input
                    type="text"
                    value={user.dob}
                    onChange={(event) => handleInputChange(event, 'dob')}
                  />
                ) : (
                  user.dob
                )}
              </td>
              <td>
                {editingUser === user._id ? (
                  <input
                    type="text"
                    value={user.mobile}
                    onChange={(event) => handleInputChange(event, 'mobile')}
                  />
                ) : (
                  user.mobile
                )}
              </td>
              <td>
                {editingUser === user._id ? (
                  <input
                    type="text"
                    value={user.email}
                    onChange={(event) => handleInputChange(event, 'email')}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUser === user._id ? (
                  <input
                    type="text"
                    value={user.university}
                    onChange={(event) => handleInputChange(event, 'university')}
                  />
                ) : (
                  user.university
                )}
              </td>
              <td>
                {editingUser === user._id ? (
                  <input
                    type="text"
                    value={user.marks}
                    onChange={(event) => handleInputChange(event, 'marks')}
                  />
                ) : (
                  user.marks
                )}
              </td>
              <td>
                {editingUser === user._id ? (
                  <input
                    type="text"
                    value={user.job_title}
                    onChange={(event) => handleInputChange(event, 'job_title')}
                  />
                ) : (
                  user.job_title
                )}
              </td>
              <td>
                {editingUser === user._id ? (
                  <button onClick={() => handleUpdateUser(user._id)}>Save</button>
                ) : (
                  <button onClick={() => handleEditUser(user._id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
