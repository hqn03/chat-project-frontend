import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8000" });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("userInfo")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userInfo")).token
    }`;
  }
  return req;
});

export const apiLogin = (data) => api.post("/accounts/login/", data);
export const apiRegister = (data) => api.post("/accounts/register/", data);