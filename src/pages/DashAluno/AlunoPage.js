import React from "react";
import "./AlunoPage.css";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../components/Sidebar/Sidebar.js";

const Home = () => {
  const navigate = useNavigate();

  const atividades = [
    { id: 1, titulo: "Resistores e Associação de Resistores", descricao: "Estude os conceitos de resistência elétrica.", dataEntrega: "30 de Out. de 2024" },
    // Adicione mais atividades conforme necessário
  ];

  const handleAtividadeClick = (atividade) => {
    navigate('/responder-atividade', { state: { atividade } });
  };

  return (
    <div className="container">
      <Sidebar />

      <main className="content">
        <header>
          <h1>Atividades do Aluno</h1>
        </header>

        <section className="activities-section">
          {atividades.map((atividade) => (
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
      </main>
    </div>
  );
};

export default Home;