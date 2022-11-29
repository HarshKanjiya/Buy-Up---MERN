import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";

import ReactStars from "react-rating-stars-component";
import { fetchProductInfo } from "../../../redux/slices/productPageSlice";
import {
  AddToCartWrapper,
  CartButton,
  Container,
  Description,
  Left,
  MakeReviewContent,
  MakeReviewOpener,
  MakeReviewOpenerWrapper,
  MakeReviewTitle,
  MakeReviewWrapper,
  PriceWrapper,
  ProductName,
  QuantityDownButton,
  QuantityUpButton,
  QuantityWrapper,
  RatingsWrapper,
  ReviewFooter,
  ReviewFooterButton,
  ReviewInputText,
  ReviewWrapper,
  Right,
  Wrapper,
} from "./ProductPage.styles";
import ReviewList from "../../layouts/reviews/reviewList";
import LoadingScreen from "../../components/LoadingScreen";
import { Divider } from "@mui/material";

const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { productInfo, loading } = useSelector((state) => state.productPage);

  const [quantity, setQuantity] = useState(1);
  const [ReviewBoxVisibility, setReviewBoxVisibility] = useState(false);
  const [userReviewRatings, setUserReviewRatings] = useState(0);
  const [userReviewComment, setUserReviewComment] = useState("");

  useEffect(() => {
    dispatch(fetchProductInfo(params.id));
  }, [dispatch]);

  const HelperReviewSubmit = () => {
    setReviewBoxVisibility(false);
  };

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Wrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {productInfo.product ? (
            <>
              <Container>
                <Left>
                  <img
                    src={productInfo.product.images[0].url}
                    alt={productInfo.name}
                  />
                </Left>
                <Right>
                  <ProductName>{productInfo.product.name}</ProductName>
                  <Description>{productInfo.product.description}</Description>

                  <RatingsWrapper>
                    <ReactStars
                      color="#f1f1f1"
                      activeColor="tomato"
                      isHalf
                      size={24}
                      edit={false}
                      value={productInfo.product.ratings}
                    />

                    <p> {`${productInfo.product.numOfReviews} Reviews`} </p>
                  </RatingsWrapper>

                  <QuantityWrapper>
                    <QuantityDownButton
                      onClick={() => {
                        setQuantity(quantity - 1);
                      }}
                      disabled={quantity <= 1}
                    >
                      <NavigateBeforeIcon />
                    </QuantityDownButton>
                    <motion.p>{quantity}</motion.p>
                    <QuantityUpButton
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                      // disabled={quantity}
                    >
                      <NavigateNextIcon />
                    </QuantityUpButton>
                  </QuantityWrapper>
                  <PriceWrapper>₹{productInfo.product.price}</PriceWrapper>
                  <AddToCartWrapper>
                    <CartButton variant="contained">
                      <span>
                        <ShoppingCartIcon /> &nbsp;&nbsp;add to Cart{" "}
                      </span>
                    </CartButton>
                  </AddToCartWrapper>
                </Right>
              </Container>
              <ReviewWrapper>
                <p className="ReviewWrapper-Header">Reviews</p>
                <hr />
                <ReviewList reviews={productInfo.product.reviews} />
              </ReviewWrapper>

              {/* make review UI */}
              <MakeReviewOpenerWrapper>
                <MakeReviewOpener
                  variant="extended"
                  onClick={() => {
                    setReviewBoxVisibility(true);
                  }}
                >
                  <EditIcon />
                  &nbsp;
                  <p>add review</p>
                </MakeReviewOpener>
              </MakeReviewOpenerWrapper>

              {/* inside dialog */}
              <MakeReviewWrapper
                open={ReviewBoxVisibility}
                onClose={() => {
                  setReviewBoxVisibility(false);
                }}
              >
                <MakeReviewTitle>Make Review</MakeReviewTitle>
                <Divider />
                <MakeReviewContent>
                  <p>Your Ratings</p>
                  <RatingsWrapper>
                    <ReactStars
                      color="#f1f1f1"
                      activeColor="tomato"
                      isHalf
                      size={24}
                      edit
                      value={userReviewRatings}
                      onChange={(value) => {
                        setUserReviewRatings(value);
                      }}
                    />
                    <p>{userReviewRatings}</p>
                  </RatingsWrapper>
                  <ReviewInputText
                    label="add your comment"
                    multiline
                    maxRows={4}
                    value={userReviewComment}
                    onChange={(e) => {
                      setUserReviewComment(e.target.value);
                    }}
                  />
                  <ReviewFooter>
                    <ReviewFooterButton
                      variant="contained"
                      onClick={HelperReviewSubmit}
                    >
                      send
                      <SendIcon />
                    </ReviewFooterButton>
                  </ReviewFooter>
                </MakeReviewContent>
              </MakeReviewWrapper>
            </>
          ) : null}
        </Wrapper>
      )}
    </>
  );
};

export default ProductPage;
