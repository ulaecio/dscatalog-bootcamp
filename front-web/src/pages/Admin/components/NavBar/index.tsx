import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const NavBar = () => (
  <nav className="admin-nav-container">
    <ul>
      <li>
        {/* @ts-ignore*/}
        <NavLink to="/admin/products" className="admin-nav-item">
          Produtos
        </NavLink>
      </li>
      <li>
        {/* @ts-ignore*/}
        <NavLink to="/admin/categories" className="admin-nav-item">
          Categorias
        </NavLink>
      </li>
      <li>
        {/* @ts-ignore*/}
        <NavLink to="/admin/users" className="admin-nav-item">
          Usuários{" "}
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
