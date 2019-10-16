import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';
const USER_URL = 'users/';

const api = axios.create({
    baseURL: BASE_URL
})

class UserDataService {
    
    retrieveAllUsers() {
        return api.get(`${USER_URL}`);
    }

    deleteUser(id) {
        return api.delete(`${USER_URL}${id}`);
    }
}

export default new UserDataService()