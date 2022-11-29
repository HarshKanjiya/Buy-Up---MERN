import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { HeroSectionCarouselComponent } from '../components/HeroSectionCaro';
import AppleLogo from "../../assets/HeroCaro/appleLogo.png"
import BuyUpLogo from "../../assets/images/logo.png"
import XiaomiLogo from "../../assets/HeroCaro/xiaomiLogo.png"
import Iphone14Img from "../../assets/HeroCaro/i phone 14.png"
import XiomiPhoneImg from "../../assets/HeroCaro/xiaomi 11 note.png"
import MacBookImg from "../../assets/HeroCaro/mac book.png"
import AccesoriesImg from "../../assets/HeroCaro/acc.png"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const carouselData = [
  {
    image:Iphone14Img,
    logo:AppleLogo,
    name:'Iphone 14',
    feature:'Longest Battery Life | 49% better Perfomance',
    price: '₹ 79,900',
    color:"#C25DDF",
  },
  {
    image:XiomiPhoneImg,
    logo:XiaomiLogo,
    name:'Xiaomi 11 Lite NE',
    feature:'1 billion color 90hz AMOLED display',
    price: '₹ 79,900',
    color:"#84FDEB",
  },
  {
    image:MacBookImg,
    logo:AppleLogo,
    name:'Macbook air M2',
    feature:'13.6 inch display with Liquid Retina Display, 8GB ram, 512GB SSD',
    price: '₹ 1,39,390',
    color:"#4E5460",
  },
  {
    image:AccesoriesImg,
    logo:BuyUpLogo,
    name:'Daily offers for Accessories',
    feature:'headsets, smart were, Smart Phone cases end much more... ',
    price: null,
    color:"#111C3A",
  },
  
]

const HeroSectionCarousel = () => {
    return ( 
        <>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={"auto"}
      loop
      data-swiper-autoplay="2000"
    
    >
    {
      carouselData.map((item,index)=>(
        <SwiperSlide key={index}>
          <HeroSectionCarouselComponent item = {item} />
        </SwiperSlide>
      ))
    }
    </Swiper>
        </>
     );
}
 
export default HeroSectionCarousel;