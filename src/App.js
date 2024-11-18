import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login.js";
import Header from './components/Header/cabecario.js';
import DashAluno from "./pages/DashAluno/AlunoPage.js";
import DashProf from "./pages/DashProf/ProfessorPage.js";
import ResponderAtividade from './pages/Responder/ResponderAtividade';  
import CadastroAtividades from "./pages/CadastroAtividades/CadastroAtividades.js";
import CorrecaoAtividades from "./pages/CorrecaoAtividades/CorrecaoAtividades.js";

const App = () => {
  return (
    <Router>
                  <Header /> {/* Cabeçalho global */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/aluno" element={<DashAluno />} />
        <Route path="/professor" element={<DashProf />} />
        <Route path="/responder-atividade" element={<ResponderAtividade />} />
        <Route path="/cadastro" element={<CadastroAtividades />} />
        <Route path="/correcao" element={<CorrecaoAtividades />} />
      </Routes>
    </Router>
  );
};

export default App;
