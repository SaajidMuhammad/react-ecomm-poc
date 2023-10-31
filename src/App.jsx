import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./style.css";
import Banner from "./components/banner/Banner";
import Categories from "./components/categories/Categories";
import ProductWrapper from "./components/product-wrapper/ProductWrapper";
import { BASE_URL } from "./config";

const App = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = async () => {
    try {
      const res = await fetch(BASE_URL + "products/categories");
      const catDatas = await res.json();
      setAllCategories(catDatas);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const res = await fetch(BASE_URL + "products");
      const prodData = await res.json();
      console.log(prodData);
      setAllProducts(prodData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="main-wrapper">
        <Categories allCategories={allCategories} />
        <ProductWrapper allProducts={allProducts} />
      </div>
    </div>
  );
};
export default App;
