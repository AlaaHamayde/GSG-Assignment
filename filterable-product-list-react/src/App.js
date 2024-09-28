// src/App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import './index.css';

const products = [
  { name: 'Smartphone', category: 'Electronics', price: 699 },
  { name: 'Laptop', category: 'Electronics', price: 1299 },
  { name: 'T-Shirt', category: 'Clothing', price: 19 },
  { name: 'Jeans', category: 'Clothing', price: 49 },
];

function App() {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  const getFilteredProducts = () => {
    if (activeFilter === 'All') {
      return products;
    }
    return products.filter(product => product.category === activeFilter);
  };

  return (
    <div>
      <header>
        <h1>Product List</h1>
      </header>
      <section id="filter-section">
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('Electronics')}>Electronics</button>
        <button onClick={() => handleFilterChange('Clothing')}>Clothing</button>
      </section>
      <ProductList products={getFilteredProducts()} />
    </div>
  );
}

export default App;
