import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CorrecaoAtividades.css";
import './CorrecaoAtividades.css';
import atividadesService from "../../services/atividades";

function CorrecaoAtividades() {
    const { idRespostaAtividade } = useParams(); // Pega o ID da resposta da URL
    const navigate = useNavigate();
    const [nota, setNota] = useState("");

    // Botão de voltar
    const handleBack = () => {
        navigate(-1);
    };

    // Submeter a nota
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const notaData = { nota: parseFloat(nota) }; // Converte a nota para número
            await atividadesService.atribuirNota(idRespostaAtividade, notaData);

            alert("Nota atribuída com sucesso!");
            setNota("");
            navigate(-1); // Volta para a tela anterior
        } catch (error) {
            console.error("Erro ao atribuir nota:", error.response?.data || error.message);
            alert("Erro ao atribuir nota. Verifique os dados e tente novamente.");
        }
    };

    return (
        <div className="container">
            <div className="content">
                <button onClick={handleBack} className="voltar">Voltar</button>
                <h2>Correção de Atividade</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nota da Atividade:</label>
                    <input
                        type="number"
                        step="0.1"
                        value={nota}
                        onChange={(e) => setNota(e.target.value)}
                        placeholder="Digite a nota (0-10)"
                        required
                    />
                    <button type="submit">Atribuir Nota</button>
                </form>
            </div>
        </div>
    );
}

export default CorrecaoAtividades;
