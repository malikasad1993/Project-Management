import axios from 'axios';

const api = axios.create({
    baseUrl: import.meta.env.VITE_BASEURL,
})

export default api