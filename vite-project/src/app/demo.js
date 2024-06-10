// Import the Axios library
import axios from 'axios';

// Define the base URL for the API
const apiUrl = 'https://crudcrud.com/api/db2ad57ac9c845c29afe42f2b1678ba0/users';

// Function to update a user
async function updateUser(userId, updatedData) {
    try {
        // Make a PUT request to update the user
        const response = await axios.put(`${apiUrl}/${userId}`, updatedData);
        
        // Log the response from the server
        console.log('User updated successfully:', response.data);
    } catch (error) {
        // Log any errors that occur
        console.error('Error updating user:', error.response ? error.response.data : error.message);
    }
}

// Example usage


const userId = '6666a7fb19f3e403e81e2a80'; // Replace with the actual user ID
const updatedData = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com'
};

// Call the updateUser function
updateUser(userId, updatedData);
