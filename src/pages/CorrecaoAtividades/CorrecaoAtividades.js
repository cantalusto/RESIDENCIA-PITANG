import React, { useEffect, useState } from "react";
import "./CorrecaoAtividades.css";
import atividadesService from "../../services/atividades";
import { useNavigate } from "react-router-dom";

const CorrecaoAtividades = () => {
  const [atividades, setAtividades] = useState([]); // Estado para armazenar as atividades devolvidas
  const navigate = useNavigate(); // Navegação para detalhes ou ações adicionais

  useEffect(() => {
    const fetchAtividadesDevolvidas = async () => {
      try {
        const data = await atividadesService.getAtividadesDevolvidas(); // Chama o serviço para buscar as atividades devolvidas
        console.log("Atividades devolvidas carregadas:", data);
        setAtividades(data); // Atualiza o estado com as atividades devolvidas
      } catch (error) {
        console.error("Erro ao carregar atividades devolvidas:", error);
      }
    };

    fetchAtividadesDevolvidas(); // Executa a função ao montar o componente
  }, []);

  const handleAtividadeClick = (atividade) => {
    // Exemplo de navegação ou ação ao clicar em uma atividade
    navigate("/atribuir-nota", { state: { atividade } }); // Envia os dados da atividade para a página de atribuir nota
  };

  return (
    <div className="container">
      <main className="content">
        <header>
          <h1>Correção de Atividades</h1>
        </header>

        <section className="activities-section">
          <h2>Atividades Devolvidas</h2>
          {atividades.length > 0 ? (
            atividades.map((atividade, index) => (
              <div
                key={index}
                className="activity-card"
                onClick={() => handleAtividadeClick(atividade)}
              >
                <h3>{atividade.titulo || "Sem título"}</h3>
                {atividade.questoes && atividade.questoes.pergunta ? (
                  <p>{atividade.questoes.pergunta}</p>
                ) : (
                  <p>Sem pergunta disponível</p>
                )}
              </div>
            ))
          ) : (
            <p>Nenhuma atividade devolvida no momento.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default CorrecaoAtividades;
