import axios from 'axios';
const API_URL = 'http://localhost:3000/';
export async function getUsers() {
    const response = await axios.get(`${API_URL}users/`);
    return response.data;
}
