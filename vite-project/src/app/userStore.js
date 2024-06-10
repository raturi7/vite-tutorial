import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const userStore = (set) => ({
    users: [],
    // Adding users
    addUser: (user) => {
        const newUser = { ...user, id: Date.now().toString() }; // Create a unique id for the new user
        set((state) => ({
            users: [newUser, ...state.users],
        }));
    },
    // Removing users
    removeUsers: (userID) => {
        set((state) => ({
            users: state.users.filter((user) => user.id !== userID),
        }));
    },
    // Update user
    updateUser: (userId, name, dob, mobile, email, university, marks, job_title) => {
        set((state) => ({
            users: state.users.map((user) =>
                user.id === userId
                    ? { ...user, name, dob, mobile, email, university, marks, job_title }
                    : user
            ),
        }));
    },
});

const useUserStore = create(
    devtools(
        persist(userStore, {
            name: "users",
        })
    )
);

export default useUserStore;
