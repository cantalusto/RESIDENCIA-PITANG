import React, { useEffect, useState } from "react";
import "./AlunoPage.css";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import atividadesService from "../../services/atividades"; // Importação do serviço

const Home = () => {
  const navigate = useNavigate();
  const [atividades, setAtividades] = useState([]);
  const [atividadesDevolvidas, setAtividadesDevolvidas] = useState([]);
  console.log("Atividade recebida:", atividadesDevolvidas); // Log das atividades devolvidas

  useEffect(() => {
    const fetchAtividades = async () => {
      try {
        const token = authService.getToken(); // Obtém o token de autenticação
        if (!token) {
          console.error("Token não encontrado. Faça login novamente.");
          return;
        }

        const response = await fetch("https://ferasapi.serveo.net/atividades", {
          headers: {
            Authorization: `Bearer ${token}`, // Envia o token no cabeçalho
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log("Atividades carregadas:", data); // Log para depuração
        setAtividades(data); // Atualiza o estado com as atividades
      } catch (error) {
        console.error("Erro ao carregar atividades:", error);
      }
    };

    fetchAtividades();
  }, []);

  const handleAtividadeClick = (atividade) => {
    navigate("/responder-atividade", { state: { atividade } });
  };

  useEffect(() => {
    const fetchAtividadesDevolvidas = async () => {
      try {
        const data = await atividadesService.getAtividadesDevolvidas();
        setAtividadesDevolvidas(data); // Atualiza o estado com as atividades devolvidas
        console.log("Atividades devolvidas carregadas:", data); // Log para depuração
      } catch (error) {
        console.error("Erro ao carregar atividades devolvidas:", error);
      }
    };

    fetchAtividadesDevolvidas(); // Chama a função para buscar as atividades devolvidas
  }, []); // Executa apenas uma vez quando o componente é montado

  return (
    <div className="container">
      <main className="content">
        <header>
          <h1>Bem-vindo Aluno</h1>
        </header>

        {/* Seção de Atividades Disponíveis */}
        <section className="activities-section">
          <h2>Atividades Disponíveis</h2>
          {atividades.length > 0 ? (
            atividades.map((atividade, index) => (
              <div
                key={index}
                className="activity-card"
                onClick={() => handleAtividadeClick(atividade)}
              >
                <h3>{atividade.titulo}</h3>
                <p>{atividade.questoes?.pergunta || "Pergunta não disponível"}</p>
              </div>
            ))
          ) : (
            <p>Nenhuma atividade disponível no momento.</p>
          )}
        </section>

        {/* Seção de Atividades Devolvidas (para visualização no console) */}
        <section className="activities-devolvidas-section">
          <h2>Atividades Devolvidas</h2>
          {atividadesDevolvidas.length > 0 ? (
            atividadesDevolvidas.map((atividadeDevolvida, index) => (
              <div key={index} className="activity-card">
                <h3>{atividadeDevolvida.titulo}</h3>
                <p>{atividadeDevolvida.questoes?.pergunta || "Pergunta não disponível"}</p>
              </div>
            ))
          ) : (
            <p>Nenhuma atividade devolvida.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
