// src/pages/ResponderAtividade.js

import React, { useState } from 'react';
import Sidebar from "../../components/Sidebar/Sidebar.js";
import './ResponderAtividade.css';

const ResponderAtividade = ({ atividade }) => {
  const [resposta, setResposta] = useState('');

  const handleRespostaChange = (e) => {
    setResposta(e.target.value);
  };

  const handleEnviarResposta = () => {
    // Aqui você poderia integrar uma lógica de envio para a API
    console.log("Resposta enviada:", resposta);
    alert("Resposta enviada com sucesso!");
  };

  return (
    <div className="container">
      <Sidebar />

      <main className="content">
        <header>
          <h1>Responder Atividade</h1>
        </header>

        <section className="atividade-detalhes">
          <h2>{atividade?.titulo || "Título da Atividade"}</h2>
          <p>{atividade?.descricao || "Descrição da atividade vai aqui."}</p>
          <p><strong>Data de Entrega:</strong> {atividade?.dataEntrega || "Data não especificada"}</p>
        </section>

        <section className="responder-secao">
            <h6>
                Titulo da pergunta
            </h6>
          <textarea
            value={resposta}
            onChange={handleRespostaChange}
            placeholder="Digite sua resposta aqui..."
          />
          <button onClick={handleEnviarResposta} className="btn-enviar">
            Enviar Resposta
          </button>
        </section>
      </main>
    </div>
  );
};

export default ResponderAtividade;
