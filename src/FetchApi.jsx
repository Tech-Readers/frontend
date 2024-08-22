import axios from "axios";

const token = localStorage.getItem("");

const FrontUrl = "http://localhost:5173/";

const api = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export default api;
