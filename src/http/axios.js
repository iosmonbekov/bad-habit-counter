import axios from "axios";
import { AUTHORIZATION } from "../consts/enum";

const instance = axios.create({
    baseURL: 'https://bad-habit-counter-server.herokuapp.com',
});

instance.interceptors.request.use((request) => {
    const token = localStorage.getItem(AUTHORIZATION.ACCESS_TOKEN) ?? '';
    request.headers.authorization = `Bearer ${token}`;
    return request;
}, (error) => {
    return Promise.reject(error);
});


export default instance;
