import React from "react";
import "./ProductWrapper.css";
import ProductCard from "../product-card/ProductCard";
import { useAppContext } from "../../contexts/AppContext";
import { Link } from "react-router-dom";

const ProductWrapper = () => {
  const { allProducts } = useAppContext();

  return (
    <div className="prod-wrapper">
      <div>Products - All</div>
      <div className="prod-cards-wrapper">
        {allProducts.map((product) => {
          return (
            <Link to={`product/${product.id}`} key={product.id}>
              <ProductCard product={product} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductWrapper;
