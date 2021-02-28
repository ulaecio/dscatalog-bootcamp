import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <Link to="/admin/products" className="mr-5">
                Listar produtos
            </Link>
            <Link to="/admin/products/create" className="mr-5">
                Criar produtos
            </Link>
            <Link to="/admin/products/:productId" className="mr-5">
                Editar produtos
            </Link>
            <Switch>
                <Route path="/admin/products" exact>
                    <h1>Exibir a listagem de produtos</h1>
                </Route>
                <Route path="/admin/products/create">
                    <h1>Criar novo produto</h1>
                </Route>
                <Route path="/admin/products/:productId">
                    <h1>Editar um produto</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default Products;