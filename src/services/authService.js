import axios from "axios";

const API_URL = "https://ferasapi.serveo.net/auth/";

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}login`, { email, password });
  return response.data;
};

export default { login };