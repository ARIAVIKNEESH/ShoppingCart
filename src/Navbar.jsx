import React, { useState } from 'react';
import './Navbar.css';
import { useCart } from './CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
      <button className="cart-button" onClick={toggleCart}>
        <img src="cart-icon.png" alt="Cart" className="cart-icon" />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </button>
      {showCart && (
        <div className="cart-overlay" onClick={toggleCart}></div>
      )}
    </nav>
  );
};

export default Navbar;
