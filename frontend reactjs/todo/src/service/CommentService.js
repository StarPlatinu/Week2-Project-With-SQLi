import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:9090/api/comments"

axios.interceptors.request.use(function (config) {
    
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {
    // Do something with request error
  return Promise.reject(error);
  
  });
  
  export const getAllComments = () => axios.get(BASE_REST_API_URL)
  