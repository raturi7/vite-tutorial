import React, { useState } from 'react';
import useUserStore from '../app/userStore';
// import axios from 'axios';

function UserList() {
    const { users, removeUsers, updateUser } = useUserStore((state) => ({
        users: state.users,
        removeUsers: state.removeUsers,
        updateUser: state.updateUser,
    }));

    // const API_URL = 'https://crudcrud.com/api/db2ad57ac9c845c29afe42f2b1678ba0/users';
    
    const [editUserId, setEditUserId] = useState(null);
    const [newName, setNewName] = useState('');
    const [newDOB,setNewDOB] = useState('');
    const [newMobile, setNewMobile] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newUniversity, setNewUniversity] = useState('');
    const [newMarks, setNewMarks] = useState('');
    const [newJobTitle, setNewJobTitle] = useState('');
    

    const handleEditClick = (user) => {
        setEditUserId(user.id);
        setNewName(user.name);
        setNewDOB(user.dob);
        setNewMobile(user.mobile);
        setNewEmail(user.email);
        setNewUniversity(user.university);
        setNewMarks(user.marks);
        setNewJobTitle(user.job_title);
    };

    const handleUpdateUser = (id) => {
        updateUser(id, newName, newDOB, newMobile, newEmail, newUniversity, newMarks, newJobTitle);

        // console.log('Updated data:', updatedData);
        setEditUserId(null);
        setNewName('');
        setNewDOB('');
        setNewMobile('');
        setNewEmail('');
        setNewUniversity('');
        setNewMarks('');
        setNewJobTitle('');
    };

    console.log(editUserId)

    return (
        <>
            <ul>
                {users.map((user, i) => (
                    <React.Fragment key={i}>
                        <li className="user-item">
                            {editUserId === user.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        placeholder="Enter Name"
                                    />
                                    <input
                                        type="date"
                                        value={newDOB}
                                        onChange={(e) => setNewDOB(e.target.value)}
                                        placeholder="Enter DOB"
                                    />
                                    <input
                                        type="text"
                                        value={newMobile}
                                        onChange={(e) => setNewMobile(e.target.value)}
                                        placeholder="Enter Mobile Number"
                                    />
                                    <input
                                        type="email"
                                        value={newEmail}
                                        onChange={(e) => setNewEmail(e.target.value)}
                                        placeholder="Enter Email"
                                    />
                                    <input
                                        type="text"
                                        value={newUniversity}
                                        onChange={(e) => setNewUniversity(e.target.value)}
                                        placeholder="Enter University Name"
                                    />
                                    <input
                                        type="number"
                                        value={newMarks}
                                        onChange={(e) => setNewMarks(e.target.value)}
                                        placeholder="Enter Marks"
                                    />
                                    <input
                                        type="text"
                                        value={newJobTitle}
                                        onChange={(e) => setNewJobTitle(e.target.value)}
                                        placeholder="Enter Job Title"
                                    />
                                    <button
                                        onClick={() => handleUpdateUser(user.id)}
                                        className="update-btn"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditUserId(null)}
                                        className="cancel-btn"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span>{user?.name}</span>
                                    <span>{user?.dob}</span>
                                    <span>{user?.mobile}</span>
                                    <span>{user?.email}</span>
                                    <span>{user?.university}</span>
                                    <span>{user?.marks}</span>
                                    <span>{user?.job_title}</span>
                                    <button
                                        onClick={() => removeUsers(user.id)}
                                        className="delete-btn"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleEditClick(user)}
                                        className="edit-btn"
                                    >
                                        Edit
                                    </button>
                                </>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </>
    );
}

export default UserList;
