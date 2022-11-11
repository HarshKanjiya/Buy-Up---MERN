import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/bundle";
import ProductCardView from "../components/productCardView";

import '../../index.css'

const products = [
  {
    name: "pocox3",
    price: "$299",
    image:
      "https://imgs.search.brave.com/sAmhPVkmTRssU-10h-OFozHp8FR1SnHYiUxul9G0oOg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/c1lfa1lUSTgxY2Vj/NW80aFRFWFZnSGFF/SyZwaWQ9QXBp",
    _id: "harsh",
  },
  {
    name: "pocox3",
    price: "$299",
    image:
      "https://imgs.search.brave.com/sAmhPVkmTRssU-10h-OFozHp8FR1SnHYiUxul9G0oOg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/c1lfa1lUSTgxY2Vj/NW80aFRFWFZnSGFF/SyZwaWQ9QXBp",
    _id: "harsh",
  },
  {
    name: "pocox3",
    price: "$299",
    image:
      "https://imgs.search.brave.com/sAmhPVkmTRssU-10h-OFozHp8FR1SnHYiUxul9G0oOg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/c1lfa1lUSTgxY2Vj/NW80aFRFWFZnSGFF/SyZwaWQ9QXBp",
    _id: "harsh",
  },
  {
    name: "pocox3",
    price: "$299",
    image:
      "https://imgs.search.brave.com/sAmhPVkmTRssU-10h-OFozHp8FR1SnHYiUxul9G0oOg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/c1lfa1lUSTgxY2Vj/NW80aFRFWFZnSGFF/SyZwaWQ9QXBp",
    _id: "harsh",
  },
  {
    name: "pocox3",
    price: "$299",
    image:
      "https://imgs.search.brave.com/sAmhPVkmTRssU-10h-OFozHp8FR1SnHYiUxul9G0oOg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/c1lfa1lUSTgxY2Vj/NW80aFRFWFZnSGFF/SyZwaWQ9QXBp",
    _id: "harsh",
  },
  {
    name: "pocox3",
    price: "$299",
    image:
      "https://imgs.search.brave.com/sAmhPVkmTRssU-10h-OFozHp8FR1SnHYiUxul9G0oOg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/c1lfa1lUSTgxY2Vj/NW80aFRFWFZnSGFF/SyZwaWQ9QXBp",
    _id: "harsh",
  },
  {
    name: "pocox3",
    price: "$299",
    image:
      "https://imgs.search.brave.com/sAmhPVkmTRssU-10h-OFozHp8FR1SnHYiUxul9G0oOg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/c1lfa1lUSTgxY2Vj/NW80aFRFWFZnSGFF/SyZwaWQ9QXBp",
    _id: "harsh",
  },
  {
    name: "pocox3",
    price: "$299",
    image:
      "https://imgs.search.brave.com/sAmhPVkmTRssU-10h-OFozHp8FR1SnHYiUxul9G0oOg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/c1lfa1lUSTgxY2Vj/NW80aFRFWFZnSGFF/SyZwaWQ9QXBp",
    _id: "harsh",
  },
];

const ProductList = () => {


  return (
    <div className=" mx-8 my-10  ">
      <div className="flex align-middle justify-between  ">
        <p className=" text-xl font-600 ">Featured</p>
        <a className=" text-blue-600 " >more</a>
      </div>
      <Swiper
      className=" py-4 "
        navigation
        modules={[Navigation]}
        slidesPerView={4}
        draggable
        grabCursor
      >
        {products ? (
          products.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductCardView product={product} />
              </SwiperSlide>
             
            );
          })
        ) : (
          <p>no product</p>
        )}
       
      </Swiper>
    </div>
  );
};

export default ProductList;
