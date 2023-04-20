import React, { useState } from "react";
/// The cart function allows the user to add and item to the cart page
function Cart(props) {
  const { cartItems, setCartItems } = props;

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="cart">
      <h1 className="carttitle">Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <>
            <h2 className="itemname">{item.name}</h2>
            <img src={item.image} alt={item.name} className="cart" />
          </>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
