import axios from "axios";

const BASE_URL = "https://lms-backend-0t1r.onrender.com/api/v1/" //http://localhost:5000

const axiosInstance = axios.create();
console.log(axiosInstance);

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
