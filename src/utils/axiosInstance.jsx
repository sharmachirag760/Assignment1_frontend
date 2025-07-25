// src/utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://assignment1-backend-d1s0.onrender.com/",
  withCredentials: true, 
});

export default axiosInstance;
