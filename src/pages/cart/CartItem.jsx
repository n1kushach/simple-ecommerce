import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";



export const CartItem = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img className="cartimg" src={productImage}></img>
      <div className="cartdescription">
        <div>
          <p className="productcartname">
            <b>{productName}</b>
          </p>
          <p className="productcartprice">{price}$</p>
          <span>Quantity - {cartItems[id]} </span>
          <button onClick={() => addToCart(id)}>Add</button>
          <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
