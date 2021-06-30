import axios from 'axios';
import { API_URL } from '../urlConfig';

const token = localStorage.getItem('token')

const axiosIntance = axios.create({
    baseURL:API_URL,
    headers:{
        'Authorization': token ? `Bearer ${token}` : ''

    }
})

export default axiosIntance;