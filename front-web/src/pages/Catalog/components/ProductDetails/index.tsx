import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();
    
    console.log(productId);
    return (
        <div className="product-details-container">
             <div className="card-base border-radius-20 product-details">
                 <h1>Product Details</h1>
            </div>
        </div>
    );
};
export default ProductDetails;