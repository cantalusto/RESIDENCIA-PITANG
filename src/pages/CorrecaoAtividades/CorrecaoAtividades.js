import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import atividadesService from "../../services/atividades"; // Certifique-se do caminho correto
import "./CorrecaoAtividades.css";

const CorrecaoAtividades = () => {
  const [atividades, setAtividades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAtividadesDevolvidas = async () => {
      try {
        const data = await atividadesService.getAtividadesDevolvidas();
        setAtividades(data); // Define as atividades no estado
      } catch (error) {
        console.error("Erro ao carregar atividades devolvidas:", error);
      }
    };

    fetchAtividadesDevolvidas();
  }, []);

  // Função para navegar para a página anterior
  const handleVoltar = () => {
    navigate(-1); // Navega para a página anterior no histórico
  };

  return (
    <div className="container">
      <h1>Correção de Atividades</h1>
      <button onClick={handleVoltar} className="btn-voltar">
        Voltar
      </button>
      {atividades.length > 0 ? (
        <div className="activities-list">
          {atividades.map((atividade, index) => (
            <div key={index} className="activity-card">
              <h3>{atividade?.titulo || "Título não disponível"}</h3>
              {atividade.questoes ? (
                <ul>
                  {atividade.questoes.map((questao, i) => (
                    <li key={i}>{questao.pergunta || "Pergunta não disponível"}</li>
                  ))}
                </ul>
              ) : (
                <p>Nenhuma questão disponível.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhuma atividade devolvida encontrada.</p>
      )}
    </div>
  );
};

export default CorrecaoAtividades;
