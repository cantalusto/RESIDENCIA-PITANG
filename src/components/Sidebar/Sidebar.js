import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-sb">
        <img src="./image.png" alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
        <li><Link to="/aluno">Atividades</Link></li>
        <li><Link to="/grades">Notas</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;