import Link from "next/link";
import React from "react";
import ProductCard from "../common/ProductCard";
import { product } from "../../../data/content";

const Products = () => {
  return (
    <section className="py-20 ">
      {/* parent div */}

      <div className="mb-5 gap-5 max-width w-full flex flex-wrap">
        {product.map((item, index) => (
          <ProductCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Products;
