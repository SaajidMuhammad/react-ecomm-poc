import React from "react";
import Banner from "../components/banner/Banner";
import Categories from "../components/categories/Categories";
import ProductWrapper from "../components/product-wrapper/ProductWrapper";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="main-wrapper">
        <Categories />
        <ProductWrapper />
      </div>
    </>
  );
};

export default HomePage;
