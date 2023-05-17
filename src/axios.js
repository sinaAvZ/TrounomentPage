import axios from 'axios';

const instance = axios.create({
    baseURL:  'http://185.105.186.100:3000/api'

});
export default instance;