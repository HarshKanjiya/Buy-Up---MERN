import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/bundle";
import ProductCardView from "../components/productCardView";

import '../../index.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


const ProductList = () => {
  const { productInfo } = useSelector(state => state.products)
  const [products,setProducts] = useState(null)
  const [sliderForPhone,setSliderForPhone] = useState(true)

  useEffect(()=>{
    setProducts(productInfo.products)
  },[productInfo])

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
        slidesPerView={ sliderForPhone === true ? 2:5 }
        draggable
        grabCursor
        onSwiper={(swiper) => { setSliderForPhone( swiper.device.android === true || swiper.device.ios === true ? true : false ) }}

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
