import React, { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
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
      setAllProducts(prodData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider value={{ allCategories, allProducts }}>
      {children}
    </AppContext.Provider>
  );
};
