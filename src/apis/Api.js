import axios from "axios";

let BaseApi = axios.create({
  // baseURL: "http://localhost:8000/api"
  baseURL: "http://eagerly.localhost/api"
});

let Api = function() {
  let token = localStorage.getItem("token");
// console.log('token',token);
  if (token) {
    BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return BaseApi;
};

export default Api;
