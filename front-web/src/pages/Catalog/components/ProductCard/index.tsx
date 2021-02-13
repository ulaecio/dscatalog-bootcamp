import React from 'react';
import { ReactComponent as ProductImage} from '../../../../core/assets/images/product.svg';
import './styles.scss';

const ProductCard = () => (
    <div className="card-base border-radius-10 product-card">
        <ProductCard />
        <div className="product-info">
        <h6 className="product-name">
            Tv Samsung
        </h6>
        </div>
    </div>
);

export default ProductCard;