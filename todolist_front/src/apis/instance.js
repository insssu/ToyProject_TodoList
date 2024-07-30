import axios from "axois";

const api = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    withCredentials: true
});

export default api;

