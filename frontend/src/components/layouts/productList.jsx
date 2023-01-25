import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/bundle";
import ProductCardView from "../components/productCardView";

import '../../index.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { getProductFromCategoryAPI } from "../../APILinks";


const ProductList = ({ category = "featured" }) => {
  const { productInfo } = useSelector(state => state.products)
  const [products, setProducts] = useState(null)
  const [sliderForPhone, setSliderForPhone] = useState(true)
  useEffect(() => {
    if (productInfo) {
      setProducts(productInfo.products)
    }
    if (category !== "featured") {
      HelperGetData(category)
    }
  }, [productInfo])

  useEffect(() => {
    setSliderForPhone(Math.floor(window.innerWidth / 150))
  }, [window.innerWidth]);

  const HelperGetData = async (category) => {
    try {
      await axios.post(getProductFromCategoryAPI, {
        category: category
      })
        .then((res) => {
          setProducts(res.data.products)
        })

    } catch (e) { console.log(e) }
  }



  if (products) {
    return (
      <div className=" mx-8 my-10  ">
        <div className="flex align-middle justify-between  ">
          <p className=" text-xl font-600 ">{category}</p>
          <a className=" text-[#2bb594] " href={`/products/${category === 'featured' ? '' : category}`} >more</a>
        </div>

        <Swiper
          className=" py-4 "
          navigation
          modules={[Navigation]}
          slidesPerView={sliderForPhone}
          draggable
          grabCursor
          onSwiper={() => { setSliderForPhone(Math.floor(window.innerWidth / 150)) }}
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
  }
};

export default ProductList;
