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
import {
  clearErrors,
  fetchProductInfo,
  submitReview,
} from "../../../redux/slices/productPageSlice";
import {
  AddToCartWrapper,
  CartButton,
  Categories,
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
import {
  Divider,
  IconButton,
  Snackbar,
  Alert as MuiAlert,
  Slide,
} from "@mui/material";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/NavBar/Header";
import { Alert } from "../../components/Alert";
import { addItemToCart } from "../../../redux/slices/cartPageSlice";
import CloseIcon from "@mui/icons-material/Close";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";

import "../../../index.css";

const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { productInfo, loading, error } = useSelector(
    (state) => state.productPage
  );
  const {cartItems} = useSelector(state => state.cart)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [ReviewBoxVisibility, setReviewBoxVisibility] = useState(false);
  const [userReviewRatings, setUserReviewRatings] = useState(0);
  const [userReviewComment, setUserReviewComment] = useState("");
  const [snackBar, setSnackBar] = useState(false);
  const [SnackTxt, setSnackTxt] = useState("");

  // console.log('cartItems :>> ', cartItems);

  useEffect(() => {
    if (error) {
      Alert({
        icon: "error",
        text: error,
        title: "Oops!",
      });
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  useEffect(() => {
    dispatch(fetchProductInfo(params.id));
  }, []);

  const HelperReviewSubmit = () => {
    dispatch(
      submitReview({
        productID: params.id,
        comment: userReviewComment,
        rating: userReviewRatings,
      })
    );
    setSnackTxt("Review added");
    setSnackBar(true);
    setReviewBoxVisibility(false);
  };

  const HelperAddItemToCart = () => {
    dispatch(addItemToCart({ id: params.id, quantity, productInfo: productInfo.product }));
    HelperSnackBarOpen();
  };

  const HelperSnackBarOpen = () => {
    setSnackTxt("Item added to cart");
    setSnackBar(true);
  };
  const HelperSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBar(false);
  };
  const snackBarAction = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={HelperSnackBarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          key={"productPage"}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{
            duration: 0.4,
          }}
        >
          <Header />
          <Wrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {productInfo.product ? (
              <>
                <Container>
                  <Left>
                    <Swiper
                      style={{
                        width:"100%",
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      loop={true}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      {productInfo.product.images.map((i, index) => (
                        <SwiperSlide key={index}>
                          <img src={i.url} alt="product img" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Left>
                  <Right>
                    <ProductName>{productInfo.product.name}</ProductName>
                    <Description>{productInfo.product.description}</Description>
                    <Categories>
                      <p className="productpage-category">
                        {productInfo.product.category}
                      </p>
                    </Categories>
                    <Categories>
                      <p>
                        status :{" "}
                        <span
                          className={
                            productInfo.product.stock < 1
                              ? "productpage-stock-out"
                              : "productpage-stock-in"
                          }
                        >
                          {" "}
                          {productInfo.product.stock < 1
                            ? "out of stock"
                            : "in stock"}{" "}
                        </span>
                      </p>
                    </Categories>

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
                        disabled={quantity >= productInfo.product.stock}
                      >
                        <NavigateNextIcon />
                      </QuantityUpButton>
                    </QuantityWrapper>
                    <PriceWrapper>₹{productInfo.product.price}</PriceWrapper>
                    <AddToCartWrapper>
                      <CartButton
                        variant="contained"
                        onClick={HelperAddItemToCart}
                        disabled={productInfo.product.stock < 1 ? true : false}
                      >
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
          <Footer />
        </motion.div>
      )}

      <Snackbar
        open={snackBar}
        autoHideDuration={1500}
        onClose={HelperSnackBarClose}
        action={snackBarAction}
        TransitionComponent={Transition}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MuiAlert
          onClose={HelperSnackBarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {SnackTxt}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default ProductPage;

function Transition(props) {
  return <Slide {...props} direction="left" />;
}
