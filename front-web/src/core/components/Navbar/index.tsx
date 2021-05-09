import React from "react";
import "./styles.scss";
import { Link, NavLink, } from 'react-router-dom';

const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link to="/" href="link" className="nav-logo-text">
                <h4>Meus produtos</h4>
            </Link>
        </div>

        <div className="col-6 offset-2">
            <ul className="main-menu">
                <li>
                    <NavLink to="/" activeClassName="active" exact>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/products" activeClassName="active">Catálogo</NavLink>
                </li>
                <li>
                    <NavLink to="/admin" activeClassName="active">Administrativo</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;