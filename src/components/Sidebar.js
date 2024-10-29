// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li><Link to="/turmas">Turmas</Link></li>
          <li><Link to="/">Atividades</Link></li> {/* Redireciona para a Home */}
          <li><Link to="/notas">Notas</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
