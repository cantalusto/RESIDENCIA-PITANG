import axios from "axios";
import authService from "./authService"; // Serviço para pegar o token

const API_URL = "https://ferasapi.serveo.net";

// Função para buscar atividades devolvidas
const getAtividadesDevolvidas = async () => {
  const token = authService.getToken(); // Obtém o token de autenticação
  if (!token) throw new Error("Token não encontrado.");

  try {
    const response = await axios.get(`${API_URL}/atividades/devolvidas`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Resposta da API (Atividades Devolvidas):", response.data); // Log da resposta da API
    return response.data; // Retorna a lista de atividades devolvidas
  } catch (error) {
    console.error("Erro ao buscar atividades devolvidas:", error.response?.data || error.message);
    throw error;
  }
};

// Função para atribuir nota à atividade
const atribuirNota = async (idRespostaAtividade, notaData) => {
  const token = authService.getToken(); // Obtém o token de autenticação
  if (!token) throw new Error("Token não encontrado.");

  try {
    const response = await axios.post(
      `${API_URL}/atividades/devolvidas/${idRespostaAtividade}/atribuirnota`,
      notaData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Resposta da atribuição de nota:", response.data); // Log da resposta da atribuição
    return response.data; // Retorna a resposta da atribuição da nota
  } catch (error) {
    console.error("Erro ao atribuir nota:", error.response?.data || error.message);
    throw error;
  }
};

// Função para cadastrar uma nova atividade
const cadastrarAtividade = async (dadosAtividade) => {
  const token = authService.getToken(); // Obtém o token de autenticação
  if (!token) throw new Error("Token não encontrado.");

  try {
    const response = await axios.post(`${API_URL}/atividades`, dadosAtividade, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Resposta da API (Cadastro de Atividade):", response.data);
    return response.data; // Retorna os dados da atividade cadastrada
  } catch (error) {
    console.error("Erro ao cadastrar atividade:", error.response?.data || error.message);
    throw error;
  }
};

// Serviço exportado com todas as funções
const atividadesService = {
  getAtividadesDevolvidas, // Recupera atividades devolvidas
  atribuirNota, // Atribui nota à atividade
  cadastrarAtividade, // Cadastra uma nova atividade
};

export default atividadesService;
