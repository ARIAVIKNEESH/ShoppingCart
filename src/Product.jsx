import React from 'react';
import { useCart } from './CartContext';

const Product = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="product">
      <img src={`/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
