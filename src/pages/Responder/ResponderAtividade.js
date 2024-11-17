import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ResponderAtividade.css';

const ResponderAtividade = () => {
  const navigate = useNavigate();
  const { state: { atividade } } = useLocation();
  const [respostas, setRespostas] = useState([]);
  
  // Função para atualizar as respostas
  const handleRespostaChange = (perguntaId, resposta) => {
    setRespostas(prevRespostas => 
      prevRespostas.map(r =>
        r.perguntaId === perguntaId ? { ...r, resposta } : r
      )
    );
  };

  const handleEnviarResposta = async () => {
    const respostasFormatadas = respostas.map(r => ({
      perguntaId: r.perguntaId,
      resposta: r.resposta,
    }));

    try {
      const response = await fetch(`https://ferasapi.serveo.net/atividades/${atividade.id}/devolver`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ respostas: respostasFormatadas }),
      });

      if (response.ok) {
        alert("Resposta enviada com sucesso!");
        navigate('/aluno'); // Redireciona para a página do aluno
      } else {
        alert("Erro ao enviar resposta.");
      }
    } catch (error) {
      console.error("Erro ao enviar resposta:", error);
      alert("Erro ao conectar com a API.");
    }
  };

  const handleVoltar = () => {
    navigate('/aluno'); // Redireciona para a Home
  };

  return (
    <div className="container">
      <main className="content">
        <header>
          <h1>Responder Atividade</h1>
          <button onClick={handleVoltar} className="btn-voltar">
            Voltar
          </button>
        </header>

        <section className="atividade-detalhes">
          <h2>{atividade?.titulo || "Título da Atividade"}</h2>
        </section>

        <section className="responder-secao">
          {atividade?.questoes.map((questao, index) => (
            <div key={index}>
              <h6>{questao.pergunta}</h6>
              <textarea
                onChange={(e) => handleRespostaChange(questao.perguntaId, e.target.value)}
                placeholder="Digite sua resposta aqui..."
              />
            </div>
          ))}
          <button onClick={handleEnviarResposta} className="btn-enviar">
            Enviar Resposta
          </button>
        </section>
      </main>
    </div>
  );
};

export default ResponderAtividade;
