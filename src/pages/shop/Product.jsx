import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];



  return (
    <div className="product">
      <img className="product-img" src={productImage}></img>
      <div className="description">
        <p className="product-name">
          <b>{productName}</b>
        </p>
        <p className="product-price">{price}$</p>
      </div>
      <button className="addcartBtn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
