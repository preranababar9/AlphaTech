import Link from "next/link";
import React from "react";
import Shop from "../common/Shop";

const Collection = () => {
  return (
    <section className="py-20">
      <h1 className="max-width py-5 text-5xl lg:mb-5 max-md:text-3xl">Shop Collection</h1>


<div className="flex flex-col gap-y-5">
<Shop  />
<Shop  />
</div>


            
   
 
    </section>
  );
};

export default Collection;
