import Auth from "pages/Auth";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import Admin from "./pages/Admin";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/Catalog/components/ProductDetails";
import Home from "./pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products" exact>
        <Catalog />
      </Route>
      <Redirect from="/admin/auth" to="/admin/auth/login" exact/>
      <Route path="/Admin/auth">
        <Auth />
      </Route>
      <Route path="/products/:productId">
        <ProductDetails />
      </Route>
      <Redirect from="/admin" to="/admin/products" exact/>
      <Route path="/Admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
