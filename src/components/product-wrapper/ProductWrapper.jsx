import React from "react";
import "./ProductWrapper.css";
import ProductCard from "../product-card/ProductCard";

const ProductWrapper = ({ allProducts }) => {
  return (
    <div className="prod-wrapper">
      <div>Products - All</div>
      <div className="prod-cards-wrapper">
        {allProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductWrapper;
