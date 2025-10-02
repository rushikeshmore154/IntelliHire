import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://intellihire-backend-imgk.onrender.com",
  withCredentials: true, // if you need cookies
});

// You can add interceptors here if needed
export default axiosInstance;
