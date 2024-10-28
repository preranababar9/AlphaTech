import Link from "next/link";
import React from "react";
import ProductCard from "../common/ProductCard";
import { product } from "../../../data/content";

const Products = () => {
  return (
    <section className="py-20 ">
      {/* parent div */}

      {product.map((item, index) => (
      <div key={index} className="mb-5 max-width  flex-col flex-wrap">
       
 <ProductCard item={item} index={index} />

    
       
      </div>
          ))}




  
    </section>
  );
};

export default Products;
