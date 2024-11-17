import React, { useEffect, useState } from "react";
import "./AlunoPage.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [atividades, setAtividades] = useState([]);

  // Supondo que a API retorne atividades com status "pendente" ou "respondida"
  useEffect(() => {
    const fetchAtividades = async () => {
      try {
        const response = await fetch("https://api.exemplo.com/atividades"); // URL da API
        const data = await response.json();
        setAtividades(data);
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
          <h1>Bem vindo Aluno</h1>
        </header>

        <section className="activities-section">
          <h2>Atividades Pendentes</h2>
          {atividades.filter(ativ => ativ.status === "pendente").map((atividade) => (
            <div
              key={atividade.id}
              className="activity-card"
              onClick={() => handleAtividadeClick(atividade)}
            >
              <h3>{atividade.titulo}</h3>
              <p>Data de entrega: {atividade.dataEntrega}</p>
            </div>
          ))}
        </section>

        <section className="activities-section">
          <h2>Atividades Respondidas</h2>
          {atividades.filter(ativ => ativ.status === "respondida").map((atividade) => (
            <div key={atividade.id} className="activity-card responded">
              <h3>{atividade.titulo}</h3>
              <p>Data de entrega: {atividade.dataEntrega}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
