import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Product from './Product';
import { CartProvider } from './CartContext';

const productList = [
  { id: 1, name: 'Fancy Product', description: 'Mens Hoodie', price: 10, image: 'product1.jpg' },
  { id: 2, name: 'Fancy Product', description: 'Boys wear T-shirt', price: 20, image: 'product2.jpg' },
  { id: 3, name: 'Special Product', description: 'Grey Hoodie', price: 30, image: 'product3.jpg' },
  { id: 4, name: 'Limited Product', description: 'Happy T-Shirt', price: 40, image: 'product4.jpg' },
  { id: 5, name: 'Special Product', description: 'Cotton Hoodie', price: 50, image: 'product5.jpg' },
  { id: 6, name: 'Limited Edition', description: 'Cotton Hoodie', price: 60, image: 'product6.jpg' }
];

const App = () => {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <div className="container">
          <header>
            <h1>Welcome to Shopping Page</h1>
          </header>
          <div className="products">
            {productList.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <footer>
            <p>Copyright &copy; 2024 Shopping Page</p>
          </footer>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
