import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import ReviewCartView from "../../components/reviewcartView";
import "swiper/css";
import "swiper/css/bundle";
import "../../../index.css"
const ReviewList = ({ reviews }) => {
  return (
    <Container>
      <Swiper
        className=" py-4 "
        navigation
        modules={[Navigation]}
        slidesPerView={4}
        draggable
        grabCursor
      >
        {reviews ? (
          reviews.map((review, index) => (
            <ReviewCartView review={review} key={index} />
          ))
        ) : (
          <p>no product</p>
        )}
      </Swiper>
    </Container>
  );
};

export default ReviewList;

const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
`;
