import axios from "axios";

const BASE_URL = "http://localhost:5001/api/v1/" //http://localhost:5000

const axiosInstance = axios.create();
console.log(axiosInstance);

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
