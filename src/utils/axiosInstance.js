import axios from "axios";
const axiosInstance = axios.create({});
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer token";
    console.log("request is sending");

    return config;
  },
  (error) => {}
);
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("request is done");
    return response;
  },
  (error) => {}
);

export default axiosInstance;
