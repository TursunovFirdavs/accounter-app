import axios from "axios";

const instance = axios.create({
    baseURL: 'http://206.189.5.14'
})

export { instance }