// src/components/CadastroAtividades.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroAtividades.css';
import Sidebar from "../../components/Sidebar/Sidebarprof.js";

function CadastroAtividades() {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState(''); // Armazena o título da atividade
    const [questoes, setQuestoes] = useState(['']); // Armazena as questões, começa com uma questão vazia

    // Função para voltar à página anterior
    const handleBack = () => {
        navigate(-1);
    };

    // Função para adicionar uma nova questão
    const adicionarQuestao = () => {
        setQuestoes([...questoes, '']); // Adiciona uma nova questão vazia ao array
    };

    // Função para remover uma questão específica
    const removerQuestao = (index) => {
        const novasQuestoes = questoes.filter((_, i) => i !== index); // Remove a questão pelo índice
        setQuestoes(novasQuestoes);
    };

    // Função para atualizar o texto de uma questão específica
    const atualizarQuestao = (index, texto) => {
        const novasQuestoes = [...questoes];
        novasQuestoes[index] = texto; // Atualiza o texto da questão no índice específico
        setQuestoes(novasQuestoes);
    };

    // Função para enviar os dados para a API
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        // Converte as questões para o formato esperado pela API
        const questoesFormatadas = questoes.map((questao) => ({ pergunta: questao }));

        const atividade = { titulo, questoes: questoesFormatadas }; // Cria o objeto com o título e as questões formatadas

        try {
            const response = await fetch('https://ferasapi.serveo.net/atividades', { // Substitua pela URL da sua API
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(atividade),
            });
            if (response.ok) {
                alert('Atividade cadastrada com sucesso!');
                setTitulo(''); // Limpa o título após enviar
                setQuestoes(['']); // Limpa as questões após enviar
            } else {
                alert('Erro ao cadastrar atividade');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <div className="container">
            <Sidebar />
            <div className="content">
            <button onClick={handleBack} className="voltar">Voltar</button>
                <h2>Cadastrar Atividade</h2>
                <form onSubmit={handleSubmit}>
                    <label>Título da Atividade:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />

                    <h3>Questões</h3>
                    {questoes.map((questao, index) => (
                        <div key={index} className="questao-container">
                            <input
                                type="text"
                                value={questao}
                                onChange={(e) => atualizarQuestao(index, e.target.value)}
                                placeholder={`Questão ${index + 1}`}
                                required
                            />
                            <button type="button" onClick={() => removerQuestao(index)}>Remover</button>
                        </div>
                    ))}
                    <button type="button" onClick={adicionarQuestao}>Adicionar Questão</button>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default CadastroAtividades;
