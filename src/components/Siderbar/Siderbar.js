import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-sb">
        <img src="./image.png" alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#">Atividades</a></li>
          <li><a href="#">Notas</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;