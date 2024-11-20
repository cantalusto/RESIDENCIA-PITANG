import React, { useEffect, useState } from "react";
import "./AlunoPage.css";
import { useNavigate } from 'react-router-dom';
import authService from "../../services/authService";

const Home = () => {
  const navigate = useNavigate();
  const [atividades, setAtividades] = useState([]);

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
            "Content-Type": "application/json"
          },
        });
        const data = await response.json();
        console.log("Atividades carregadas:", data); // Log para depuração
        setAtividades(data); // Atualiza o estado com as atividades
      } catch (error) {
        console.error("Erro ao carregar atividades:", error);
      }
    };

    fetchAtividades();
  }, []);

  const handleAtividadeClick = (atividade) => {
    navigate('/responder-atividade', { state: { atividade } });
  };

  return (
    <div className="container">
      <main className="content">
        <header>
          <h1>Bem-vindo Aluno</h1>
        </header>

        <section className="activities-section">
          <h2>Atividades Disponíveis</h2>
          {atividades.length > 0 ? (
            atividades.map((atividade, index) => (
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
            <p>Nenhuma atividade disponível no momento.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
