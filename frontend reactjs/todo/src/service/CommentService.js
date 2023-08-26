import axios from "axios";
import { getToken } from "./AuthService";

const BASE_REST_API_URL = "http://localhost:9090/api/comments"

axios.interceptors.request.use(function (config) {
    
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {
    // Do something with request error
  return Promise.reject(error);
  
  });
  
export const getAllComments = () => axios.get(BASE_REST_API_URL)

export const saveComment = (comment) => axios.post(BASE_REST_API_URL, comment)

export const deleteComment = (id) => axios.delete(BASE_REST_API_URL + '/' + id)

