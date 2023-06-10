import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import "./styles.scss"
const Admin = () => (
  <div className="admin-container">
    <NavBar />
    <div className="admin-content">
      <Switch>
        <Route path="/admin/products">
          <Products />
        </Route>
        <Route path="/admin/categories">
          <h1>Categorias</h1>
        </Route>
        <Route path="/admin/users">
          <h1>Usuários</h1>
        </Route>
      </Switch>
    </div>
  </div>
);

export default Admin;
