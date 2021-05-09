import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import Navbar from "./core/components/Navbar";
import Admin from "./pages/Admin";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/Catalog/components/ProductDetails";

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
