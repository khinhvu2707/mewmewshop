import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://6314bbdafa82b738f74d2d91.mockapi.io/api/mewmew/',
    headers: {
        'content-type': 'application/json',
    }
})
export default axiosClient;
