import React from 'react';
import './Home.css';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="content">
        <header>
          <nav>
            <ul className="top-menu">
              <li><a href="#">Mural</a></li>
              <li><a href="#">Atividades</a></li>
              <li><a href="#">Notas</a></li>
            </ul>
          </nav>
        </header>

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

export default Home;
