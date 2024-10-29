import React from "react";
import "./AlunoPage.css";
import Sidebar from "../../components/Siderbar/Siderbar.js";

const DashAluno = () => {
  return (
    <div className="container-alunop">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="content-alunop">
        <header></header>

        {/* Atividades */}
        <section className="atividades">
          <div className="atividades-pendentes">
            <h2>Atividades Pendentes</h2>
            <div className="atividade-item">
              <span className="icon">&#x1F4DD;</span>
              <div className="detalhes">
                <h3>Resistores e associação de resistores</h3>
                <p>Data de entrega: 25 de Set. de 2024, 10:00</p>
              </div>
              <span className="seta">&#x27A4;</span>
            </div>
            {/* Adicionar mais itens conforme necessário */}
          </div>

          <div className="atividades-respondidas">
            <h2>Atividades Respondidas</h2>
            <div className="atividade-item">
              <span className="icon">&#x1F7E2;</span>
              <div className="detalhes">
                <h3>Nome da Atividade</h3>
              </div>
              <span className="seta">&#x27A4;</span>
            </div>
            {/* Adicionar mais itens conforme necessário */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashAluno;
