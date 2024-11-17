// src/services/atividades.js
import axios from "axios";
import authService from "./authService";

const API_URL = "https://ferasapi.serveo.net/atividades/";

const cadastrarAtividade = async (atividade) => {
  const token = authService.getToken();

  if (!token) {
    throw new Error("Token não encontrado. Faça login novamente.");
  }

  try {
    const response = await axios.post(API_URL, atividade, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro na API:", error.response?.data || error.message);
    throw error;
  }
};

export default { cadastrarAtividade };
