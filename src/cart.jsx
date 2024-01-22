import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
