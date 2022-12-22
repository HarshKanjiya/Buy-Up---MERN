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
      <Master
        
      >
        {reviews.length !== 0 ? (
          reviews.map((review, index) => (
              <ReviewCartView review={review} key={index} />
          ))
        ) : (
          <NoReviewsYet>no reviews yet</NoReviewsYet>
        )}
      </Master>
    </Container>
  );
};

export default ReviewList;

const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const NoReviewsYet = styled.p`
width: 100%;
text-align: center;
color:#909090;
`
const Master = styled.div`
display: flex;
overflow-x: auto;
overflow-y: hidden;
::-webkit-scrollbar {
  display: none;
}



`