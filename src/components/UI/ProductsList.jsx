import React from "react";
import ProductCard from "./ProductsCart";
const ProductsList = ({data}) => {
  return (
    <>
      {
        data?.map(item=>(
          <ProductCard  item={item}/>
        ))
      }
    </>
  );
};

export default ProductsList;
