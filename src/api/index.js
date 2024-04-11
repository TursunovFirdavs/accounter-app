import axios from "axios";
import { loadState } from "../storage";

const instance = axios.create({
    baseURL: import.meta.env.VITE_PROJECT_API
})

instance.interceptors.request.use((config) => {
    console.log(loadState('access'));
    if(config.url !== '/account/token/') {
       config.headers.Authorization = `Bearer ${loadState('access')}`,
       config.headers["Content-Type"] = 'application/json'
    }
    return config
})

export { instance }