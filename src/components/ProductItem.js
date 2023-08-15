// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <a href={product.link} target="_blank" rel="noopener noreferrer">
        <img src={product.thumbnailUrl} alt="Product Thumbnail" />
        <p>{product.title}</p>
        <p>{product.price}</p>
      </a>
    </div>
  );
};

export default ProductItem;
