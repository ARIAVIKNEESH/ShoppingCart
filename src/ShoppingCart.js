import React from 'react';
import { useCart } from './CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map(product => (
          <div key={product.id} className="cart-item">
            <strong>{product.name}</strong> - ${product.price}
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
