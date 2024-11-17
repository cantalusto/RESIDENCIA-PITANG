import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login.js";
import DashAluno from "./pages/DashAluno/AlunoPage.js";
import DashProf from "./pages/DashProf/ProfessorPage.js";
import ResponderAtividade from './pages/Responder/ResponderAtividade';
import Grades from "./pages/Grades/Grades.js";
import CadastroAtividades from "./pages/CadastroAtividades/CadastroAtividades.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/aluno" element={<DashAluno />} />
        <Route path="/professor" element={<DashProf />} />
        <Route path="/responder-atividade" element={<ResponderAtividade />} />
        <Route path="/cadastro" element={<CadastroAtividades />} />
      </Routes>
    </Router>
  );
};

export default App;
