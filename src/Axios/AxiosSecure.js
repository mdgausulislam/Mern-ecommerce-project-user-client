import axios from "axios";
import { api } from '../../urlConfig';
import { authConstant } from '../redux/actions/constant';
import store from '../redux/store/store';


const token = window.localStorage.getItem("token");

const axiosIntance = axios.create({
    baseURL: api,
    headers: {
        Authorization: token ? `Bearer ${token}` : "",
    },
});

axiosIntance.interceptors.request.use((req) => {
    const { auth } = store.getState();
    if (auth.token) {
        req.headers.Authorization = `Bearer ${auth.token}`;
    }
    return req;
});

export default axiosIntance;

