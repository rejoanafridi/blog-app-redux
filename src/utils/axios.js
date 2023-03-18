import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://blog-app-server-lvqd.onrender.com",
});

export default axiosInstance;
