import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReactStars from "react-rating-stars-component";
import { fetchProductInfo } from "../../../redux/slices/productPageSlice";
import {
  AddToCartWrapper,
  CartButton,
  Container,
  Description,
  Left,
  PriceWrapper,
  ProductName,
  QuantityDownButton,
  QuantityUpButton,
  QuantityWrapper,
  RatingsWrapper,
  Right,
  Wrapper,
} from "./ProductPage.styles";
import ReviewList from "../reviews/reviewList";

const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { productInfo } = useSelector((state) => state.productPage);

  const [quantity, setQuantity] = useState(1);

  console.log("object :>> ", productInfo.product);
  useEffect(() => {
    dispatch(fetchProductInfo(params.id));
  }, [dispatch]);

  return (
    <Wrapper>
      {productInfo.product ? (
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
          </Right>
        </Container>
      ) : null}
      {productInfo.product ? (
        <>
          <ReviewList reviews={ productInfo.product.reviews } />
          <AddToCartWrapper>
            <CartButton variant="contained">
              {" "}
              <ShoppingCartIcon /> &nbsp;&nbsp;add to Cart{" "}
            </CartButton>
          </AddToCartWrapper>
        </>
      ) : null}
    </Wrapper>
  );
};

export default ProductPage;
