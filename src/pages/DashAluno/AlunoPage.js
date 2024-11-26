import React, { useEffect, useState } from "react";
import "./AlunoPage.css";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const Home = () => {
  const navigate = useNavigate();
  const [atividadesPendentes, setAtividadesPendentes] = useState([]);
  const [atividadesRespondidas, setAtividadesRespondidas] = useState([]);

  useEffect(() => {
    const fetchAtividades = async () => {
      try {
        const token = authService.getToken(); // Obtém o token de autenticação
        if (!token) {
          console.error("Token não encontrado. Faça login novamente.");
          return;
        }

        const response = await fetch("https://ferasapi.serveo.net/atividades", {
          headers: {
            Authorization: `Bearer ${token}`, // Envia o token no cabeçalho
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log("Atividades carregadas:", data);

        // Dividindo as atividades entre pendentes e respondidas
        const pendentes = data.filter((atividade) => !atividade.respondida);
        const respondidas = data.filter((atividade) => atividade.respondida);

        setAtividadesPendentes(pendentes);
        setAtividadesRespondidas(respondidas);
      } catch (error) {
        console.error("Erro ao carregar atividades:", error);
      }
    };

    fetchAtividades();
  }, []);

  const handleAtividadeClick = (atividade) => {
    navigate("/responder-atividade", { state: { atividade } });
  };

  return (
    <div className="container">
      <main className="content">
        <header>
          <h1>Bem-vindo Aluno</h1>
        </header>

        {/* Seção de Atividades Pendentes */}
        <section className="activities-section">
          <h2>Atividades Pendentes</h2>
          {atividadesPendentes.length > 0 ? (
            atividadesPendentes.map((atividade, index) => (
              <div
                key={index}
                className="activity-card"
                onClick={() => handleAtividadeClick(atividade)}
              >
                <h3>{atividade.titulo}</h3>
                <p>{atividade.questoes.pergunta}</p>
              </div>
            ))
          ) : (
            <p>Não há atividades pendentes no momento.</p>
          )}
        </section>

        {/* Seção de Atividades Respondidas */}
        <section className="activities-section">
          <h2>Atividades Respondidas</h2>
          {atividadesRespondidas.length > 0 ? (
            atividadesRespondidas.map((atividade, index) => (
              <div key={index} className="activity-card responded">
                <h3>{atividade.titulo}</h3>
                <p>Nota: {atividade.nota !== null ? atividade.nota : "Não avaliada ainda"}</p>
              </div>
            ))
          ) : (
            <p>Você ainda não respondeu nenhuma atividade.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
