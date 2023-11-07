import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SingleProduct from "../components/single-product/SingleProduct";

const SingleProductPage = () => {
  const { productId } = useParams();
  const { allProducts } = useAppContext();

  const [loadedProduct, setLoadedProduct] = useState(null);

  useEffect(() => {
    if (allProducts.length > 0) {
      const filterdProduct = allProducts.filter((product) => {
        if (product?.id === +productId) {
          return product;
        }
      });

      setLoadedProduct(filterdProduct[0]);
    }
  }, [allProducts]);

  return <SingleProduct loadedProduct={loadedProduct} />;
};

export default SingleProductPage;
