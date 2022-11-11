import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();

  const product = {
    name: "pocox3",
    price: "$299",
    image:
      "https://imgs.search.brave.com/sAmhPVkmTRssU-10h-OFozHp8FR1SnHYiUxul9G0oOg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/c1lfa1lUSTgxY2Vj/NW80aFRFWFZnSGFF/SyZwaWQ9QXBp",
    _id: "harsh",
  };

  return (
    <div className=" h-full flex-row justify-around sm:flex-col sm:justify-start sm:align-middle  ">
      {/* images */}
      <div>
        <img src={product.image} alt="pr" />
      </div>

      {/* text */}
      <div className="flex-col gap-2 " >
        
        <p> {product.name} </p>

      </div>
    </div>
  );
};

export default ProductPage;
