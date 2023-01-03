import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviews, getAllReviews } from "../../../redux/slices/AdminSlice";
import { motion } from "framer-motion";
import { Wrapper } from "./Order";
import {
  CardWrapper,
  Left,
  Right,
} from "../../layouts/dashboard/products/productsLayout.styles";
import { Btn2 } from "../../layouts/dashboard/users/UsersLayout";

const JudgeReviews = ({ productID, reviews }) => {
  const dispatch = useDispatch();

  const submitHandler = (ReviewId) => {
    dispatch(deleteReviews({ productId: productID, reviewID: ReviewId }));
  };

  return (
    <Wrapper
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{ duration: 0.3, type: "tween" }}
      key={`reviews`}
    >
      {reviews.map((review, index) => (
        <CardWrapper
          key={index}
          layout
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
        >
          <Left>
            <p className="admin-CardWrapper-index">{index + 1}</p>
            <p>
              comment : <span>{review.comment}</span>
            </p>
            <p>
              Rating : <span>{review.rating}</span>
            </p>
            <p>
              From : <span>{review.name}</span>
            </p>
          </Left>
          <Right>
            <Btn2
              onClick={() => {
                submitHandler(review._id);
              }}
            >REMOVE</Btn2>
          </Right>
        </CardWrapper>
      ))}
    </Wrapper>
  );
};

export default JudgeReviews;
