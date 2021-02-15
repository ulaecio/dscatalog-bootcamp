import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import "./styles.scss";

const Catalog = () => {
  //Quando a lista de produtos estiver disponível,
  //popular um estado no componente e listar os produtos dianmicamente.
  
  //Quando o componente iniciar, buscar a lista de produto
  useEffect(() => {

    //Limitações do fech: 
    //muito verboso,
    //não tem suporte pare ler progresso de upload de arquivos e
    //não tem suporte nativo para enviar query de strings
    //Assim substituiremos <fech> por <axios>
    
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, []);

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Catalogo de produtos</h1>
      <div className="catalog-products">
        <Link to="/products/1">
          <ProductCard />
        </Link>
        <Link to="/products/2">
          <ProductCard />
        </Link>
        <Link to="/products/3">
          <ProductCard />
        </Link>
        <Link to="/products/4">
          <ProductCard />
        </Link>
        <Link to="/products/5">
          <ProductCard />
        </Link>
        <Link to="/products/6">
          <ProductCard />
        </Link>
        <Link to="/products/7">
          <ProductCard />
        </Link>
        <Link to="/products/8">
          <ProductCard />
        </Link>
        <Link to="/products/9">
          <ProductCard />
        </Link>
        <Link to="/products/10">
          <ProductCard />
        </Link>
      </div>
    </div>
  );
}

export default Catalog;
