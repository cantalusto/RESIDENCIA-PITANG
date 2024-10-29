// src/pages/Grades.js

import React from 'react';
import Sidebar from '../components/Sidebar';
import './Grades.css';

const Grades = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="content">
        <header>
          <h1>Notas do Aluno</h1>
        </header>

        {/* Notas */}
        <section className="grades-section">
          <div className="grade-item">
            <h3>Matemática</h3>
            <p>Nota: 8.5</p>
          </div>
          <div className="grade-item">
            <h3>Português</h3>
            <p>Nota: 9.0</p>
          </div>
          <div className="grade-item">
            <h3>Ciências</h3>
            <p>Nota: 7.5</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Grades;
