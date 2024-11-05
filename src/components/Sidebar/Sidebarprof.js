import React from 'react';
import './Sidebarprof.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-sb">
        <img src="./image.png" alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
        <li><Link to="/professor">Home</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;