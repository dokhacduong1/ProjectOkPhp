import axios from "axios"
const API_DOMAIN = "http://localhost:8080/api/";


export const Get = async (path) => {
  const response = await axios.get(API_DOMAIN + path);
  const result = await response.data;
  return result;
}
export const Post = async (path,data) => {
  const response = await axios.post(API_DOMAIN + path,data);
  const result = await response.data;
  return result;
}