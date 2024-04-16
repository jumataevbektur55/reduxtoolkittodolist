import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Product = () => {
  const { product } = useSelector((s) => s.main);
  return (
    <div className="container">
      <div className=" flex items-center justify-center flex-wrap  gap-32 mt-10">
        {
            product.map((el)=> <ProductCard el={el}/>)
        }
      </div>
    </div>
  );
};

export default Product;