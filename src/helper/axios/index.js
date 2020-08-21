import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export default axios.create({
    baseURL: BASE_URL
});