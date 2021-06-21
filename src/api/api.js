import * as axios from "axios";
import Cookies from "js-cookie";

const loginTemplate = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    Authorization: "Basic MTFkN2M5Zjo0Y2JjZWE5NmRl",
  },
});

const authTemplate = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    Authorization: `Bearer ${Cookies.get("accessToken")}`,
  },
});

// authTemplate.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       console.log("You are not authorized");
//     }
//     return error.response;
//   }
// );

const logIn = async (username, password) => {
  const response = await loginTemplate.post(`auth/login`, {
    username,
    password,
  });
  return response;
};

const logOut = async () => {
  const response = await authTemplate.post(`auth/logout`);
  return response;
};

const getOrdersfromApi = async () => {
  const response = await authTemplate.get(`/db/order`);
  console.log(response);
}

const api = {
  logIn,
  logOut,
  getOrdersfromApi,
};

export default api;