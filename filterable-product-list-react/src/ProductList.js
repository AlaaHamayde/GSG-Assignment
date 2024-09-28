// src/ProductList.js
import React from 'react';

function ProductList({ products }) {
  return (
    <section id="product-display">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
