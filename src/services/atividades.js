import axios from 'axios';

const API_URL = "https://ferasapi.serveo.net";

const cadastrarAtividade = async (atividade) => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token não encontrado.");

    try {
        const response = await axios.post(
            `${API_URL}/atividades`,
            atividade,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Erro na API:", error.response?.data || error.message);
        throw error;
    }
};

// Nova função para atribuir nota
const atribuirNota = async (idRespostaAtividade, notaData) => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token não encontrado.");

    try {
        const response = await axios.post(
            `${API_URL}/atividades/devolvidas/${idRespostaAtividade}/atribuirnota`,
            notaData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Erro na API:", error.response?.data || error.message);
        throw error;
    }
};

export default {
    cadastrarAtividade,
    atribuirNota
};
