import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#">Turmas</a></li>
          <li><a href="#">Atividades</a></li>
          <li><a href="#">Notas</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
