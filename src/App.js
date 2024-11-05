import React from 'react';
import './App.css';
import menu from './img/menu.png';
import inicio from './img/inicio.png';
import turma from './img/turma.png';
import atividades from './img/atividades.png';
import configuracoes from './img/configuracoes.png';
import logoFeras from './img/logoferas.png';
import notificacaoImg from './img/notificação.png';
import atividadeBrancoImg from './img/atividadebranco.png';

const App = () => {
  return (
    <div className="container">
      <nav className="menu">
        <ul>
          <div className="menu-inicial">
            <img src={menu} alt="menu-inicial" />
          </div>
          <li>
            <div className="navbar-item">
              <img src={inicio} alt="inicio" />
              <span>Início</span>
            </div>
          </li>
          <li>
            <div className="navbar-item">
              <img src={turma} alt="turma" />
              <span>Turmas</span>
            </div>
          </li>
          <li>
            <div className="navbar-item">
              <img src={atividades} alt="atividades" />
              <span className="borda">Atividades</span>
            </div>
          </li>
          <li>
            <div className="navbar-item">
              <img src={configuracoes} alt="configurações" />
              <span>Configurações</span>
            </div>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <div className="mural">
          <nav>
            <img className="logoFeras" src={logoFeras} alt="logo" />
            <ul className="centralizado">
              <li>Mural</li>
              <li className="borda">Atividades</li>
              <li className="notificacao">Notas</li>
              <img className="notificacao" src={notificacaoImg} alt="notificação" />
            </ul>
          </nav>
          <hr className="cabecario" />
        </div>
        <div className="section">
          <div className="principal">
            <header>
              <div className="header-content">
                <img src={atividadeBrancoImg} alt="atividadesamarela" className="header-image" />
                <h1>Resistores e associação de resistores</h1>
              </div>
              <p>Professor: Nome do Professor</p>
              <div className="descricao">
                <p style={{ display: 'inline-block', marginRight: '30%' }}>01. Cálculos de Resistência</p>
                <p style={{ display: 'inline-block' }}>Data de Entrega: 26 de Set, de 2024, 10:00</p>
                <p style={{ display: 'inline-block', marginRight: '31%' }}>02. Montagem de Circuitos</p>
                <p style={{ display: 'inline-block' }}>Data de Entrega: 01 de Out, de 2024, 12:00</p>
                <p style={{ display: 'inline-block', marginRight: '31%' }}>03. Simulações e Software</p>
                <p style={{ display: 'inline-block' }}>Data de Entrega: 10 de Out, de 2024, 13:00</p>
              </div>
            </header>
          </div>
        </div>
        <footer>@direitos reservados feras</footer>
      </div>
    </div>
  );
};

export default App;
