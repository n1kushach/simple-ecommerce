import React from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import { PRODUCTS } from "../../Products";

export const ProductPage = () => {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  // we access URL parameter with useParams hook in order to only render selected PRODUCT from page
  let { productId } = useParams();
  console.log(cartItems);

  return <div className="selectedproduct">
    {PRODUCTS.map((product, index) => {
      if(product.id == productId) {
        return <div key={index}>
          <h1>{product.productName}</h1>
        </div>
      }
    })}
  </div>;
};
