// script.js
const products = [
    { name: 'Smartphone', category: 'Electronics', price: 699 },
    { name: 'Laptop', category: 'Electronics', price: 1299 },
    { name: 'T-Shirt', category: 'Clothing', price: 19 },
    { name: 'Jeans', category: 'Clothing', price: 49 },
];

function displayProducts(filteredProducts) {
    const productDisplay = document.getElementById('product-display');
    productDisplay.innerHTML = ''; // Clear previous products

    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
        <h2>${product.name}</h2>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
      `;
        productDisplay.appendChild(productItem);
    });
}

function filterProducts(category) {
    let filteredProducts = products;
    if (category !== 'All') {
        filteredProducts = products.filter(product => product.category === category);
    }
    displayProducts(filteredProducts);
}

// Display all products by default
window.onload = () => filterProducts('All');
