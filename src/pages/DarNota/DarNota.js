import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import atividadesService from "../../services/atividades";

const DarNota = () => {
  const location = useLocation(); // Recebe dados da navegação
  const navigate = useNavigate();
  const { atividade } = location.state || {}; // Recupera os dados da atividade selecionada
  const [respostas, setRespostas] = useState([]);
  const [nota, setNota] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const fetchRespostas = async () => {
      try {
        const data = await atividadesService.getAtividadesRespondidas(atividade.id);
        setRespostas(data);
      } catch (error) {
        console.error("Erro ao carregar respostas da atividade:", error);
      }
    };

    if (atividade) {
      fetchRespostas();
    }
  }, [atividade]);

  const handleAtribuirNota = async () => {
    try {
      if (!nota || isNaN(nota)) {
        setMensagem("Insira uma nota válida.");
        return;
      }

      await atividadesService.atribuirNota(atividade.id, { nota: parseFloat(nota) });
      setMensagem("Nota atribuída com sucesso!");
    } catch (error) {
      console.error("Erro ao atribuir nota:", error);
      setMensagem("Erro ao atribuir nota. Tente novamente.");
    }
  };

  return (
    <div className="container">
      <h1>Atribuir Nota</h1>
      {atividade ? (
        <>
          <h2>Atividade: {atividade.tituloAtividade}</h2>
          <h3>Aluno: {atividade.nomeUsuario}</h3>

          <section>
            <h4>Respostas do Aluno:</h4>
            {respostas.length > 0 ? (
              respostas.map((resposta, index) => (
                <div key={index} className="response-card">
                  <p>{resposta.conteudoResposta || "Resposta não disponível."}</p>
                </div>
              ))
            ) : (
              <p>Carregando respostas...</p>
            )}
          </section>

          <section>
            <h4>Atribuir Nota</h4>
            <input
              type="number"
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              placeholder="Insira a nota"
              className="nota-input"
            />
            <button onClick={handleAtribuirNota} className="btn-atribuir-nota">
              Salvar Nota
            </button>
            {mensagem && <p className="mensagem">{mensagem}</p>}
          </section>
        </>
      ) : (
        <p>Nenhuma atividade selecionada. Volte para a página anterior.</p>
      )}

      <button onClick={() => navigate("/professor")} className="btn-voltar">
        Voltar
      </button>
    </div>
  );
};

export default DarNota;
