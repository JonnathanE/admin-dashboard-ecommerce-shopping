import axios from "axios";
import { API } from './config';

//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.token;

export const publicRequest = axios.create({
    baseURL: API,
});

export const userRequest = axios.create({
    baseURL: API,
    headers: { token: `Bearer ${TOKEN}` },
});
