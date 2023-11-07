import React, { useEffect } from "react";

const SingleProduct = ({ loadedProduct }) => {
  
  useEffect(() => {
    console.log(loadedProduct);
  }, [loadedProduct]);

  return <div>SingleProduct</div>;
};

export default SingleProduct;
