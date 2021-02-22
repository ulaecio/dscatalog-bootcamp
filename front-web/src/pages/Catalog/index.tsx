import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ProductsResponse } from 'core/types/Product';
import ProductCard from './components/ProductCard';
import ProductCardLoader from './components/Loaders/ProductCardLoader';
import { makeRequest } from './components/utils/request';
import './styles.scss';

const Catalog = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect( () => {
    const params = {
      page: 0,
      linesPerPage: 5
    }

    setIsLoading(true);
    makeRequest({ url: '/products', params })
    .then( response => setProductsResponse(response.data))
    .finally(() => {
      setIsLoading(false);
    })
  }, []);

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Catalogo de produtos</h1>

      <div className="catalog-products">

        {isLoading ? <ProductCardLoader /> : (
          productsResponse?.content.map(product => (
            <Link to={`/products/${product.id}`} key={product.id}>
              < ProductCard product={product}/> 
              </Link>
          ))
        )}
      </div>

    </div>
  )
};

export default Catalog;
