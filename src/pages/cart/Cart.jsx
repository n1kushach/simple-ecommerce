import React from "react";
import { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../context/ShopContext";
import { CartItem } from "./CartItem";
import "./Cart.css"

export const Cart = () => {
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div style={{color: "black", textAlign:"center", fontSize: "2rem"}}>
      <h1>My Cart</h1>
      </div>
      <div style={{color: "black"}} className="cartItems">
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={index} data={product} />;
          }
        })}
      </div>
    </div>
  );
};
