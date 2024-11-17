// src/services/authService.js
import axios from "axios";

const API_URL = "https://ferasapi.serveo.net/auth/";

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}login`, { email, password });
  const { token } = response.data;

  if (token) {
    localStorage.setItem("authToken", token);
  }

  return response.data;
};

const getToken = () => localStorage.getItem("authToken");

export default { login, getToken };
