import React from "react";
import "./styles.scss";

const NavBar = () => (
  <nav className="admin-nav-container">
    <ul>
      <li>
        <a href="link" className="admin-nav-item active ">Meus Produtos</a>
      </li>
      <li>
        <a href="link" className="admin-nav-item">Minha Categorias</a>
      </li>
      <li>
        <a href="link" className="admin-nav-item">Meus Usuários </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
