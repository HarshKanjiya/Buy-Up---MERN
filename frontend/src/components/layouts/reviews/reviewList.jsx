import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import ReviewCartView from "../../components/reviewcartView";
import "swiper/css";
import "swiper/css/bundle";
import "../../../index.css";

const ReviewList = ({ reviews }) => {
  return (
    <Container>
      <Swiper
        className=" py-4 "
        navigation
        modules={[Navigation]}
        slidesPerView={4}
        draggable
        centeredSlides
        grabCursor
      >
        {reviews.length !== 0 ? (
          reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCartView review={review} />
            </SwiperSlide>
          ))
        ) : (
          <NoReviewsYet>no reviews yet</NoReviewsYet>
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

const NoReviewsYet = styled.p`
width: 100%;
text-align: center;
color:#909090;
`