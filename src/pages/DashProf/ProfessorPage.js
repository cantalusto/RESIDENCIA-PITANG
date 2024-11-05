import React from "react";
import './ProfessorPage.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../components/Sidebar/Sidebarprof.js";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCadastrarClick = () => {
    navigate('/cadastro');
  };

  const handleCorrigirClick = () => {
    console.log('Corrigir Atividades clicado');
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="dashboard">
        <header>
          <h1>Bem vindo Professor</h1>
        </header>
        <h3>Escolha uma Ação</h3>
        <div className="buttons-container">
          {/* Botão Cadastrar Atividades */}
          <button 
            className="action-button" 
            onClick={handleCadastrarClick}
          >
            Cadastrar Atividades
          </button>

          {/* Botão Corrigir Atividades */}
          <button 
            className="action-button" 
            onClick={handleCorrigirClick}
          >
            Corrigir Atividades
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
