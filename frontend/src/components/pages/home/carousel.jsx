import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/bundle";

import "../../../index.css";


const Carousel = () => {
  

  return (
   
     <Swiper
      className="swiperrrr"
      direction="vertical"
      slidesPerView={3}
    >
      <SwiperSlide key={1}>
        <div className="rect">
          <p>1qwertyuiuytrew</p>
        </div>
      </SwiperSlide>
     
    </Swiper>
   
  );
};

export default Carousel;
