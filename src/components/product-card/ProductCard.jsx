import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="prod-card-wrapper">
      <div>
        <img src={product.image} alt="" className="prod-card-image" />

        <div> {product.title} </div>
        <div> {product.price} USD </div>
        <div>
          Star : {product.rating.rate} ({product.rating.count}){" "}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
