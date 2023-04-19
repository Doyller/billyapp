import React, { useState } from "react";

function Cart(props) {
  const { cartItems, setCartItems } = props;

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
          </>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
