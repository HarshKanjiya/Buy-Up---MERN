import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JudgeReviews from "../../../components/admin/judgeReviews";
import LoadingScreen from "../../../components/LoadingScreen";
import {
  HeaderElementsWrapper,
  HeadLine,
} from "../dashboard/DashboardLayout.styles";
import { CardWrapper, Left } from "../products/productsLayout.styles";
import { motion } from "framer-motion";
import { BackBtn } from "../orders/OrdersLayout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  clearDeleteSuccessInAdmin,
  clearErrorsInAdmin,
  getAdminProducts,
} from "../../../../redux/slices/AdminSlice";
import { Alert } from "../../../components/Alert";

const ReviewsLayout = () => {
  const dispatch = useDispatch();
  const { adminProducts, loading, deletedSuccess, errorInAdmin } = useSelector(
    (state) => state.admin
  );
  const [reviewsLayout, setReviewsLayout] = useState(false);

  const [productID, setProductID] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (deletedSuccess) {
      Alert({
        title: "",
        text: "Review Removed!",
      });
      dispatch(clearDeleteSuccessInAdmin());
      dispatch(getAdminProducts({}));
    }
    if (errorInAdmin) {
      Alert({
        title: "Oops!",
        text: errorInAdmin,
        icon: "error",
      });
      dispatch(clearErrorsInAdmin());
    }
  }, [deletedSuccess]);

  return (
    <div style={{ overflowX: "hidden" }}>
      {reviewsLayout ? (
        <motion.div
          key="1"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3, type: "tween" }}
          style={{ display: "flex", gap: "2rem" }}
        >
          <BackBtn
            onClick={() => {
              setReviewsLayout(false);
            }}
          >
            <ArrowBackIcon />
          </BackBtn>
          <HeadLine>Reviews</HeadLine>
        </motion.div>
      ) : (
        <motion.div
          key="2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3, type: "tween" }}
        >
          <HeadLine>Reviews</HeadLine>
        </motion.div>
      )}

      {reviewsLayout ? (
        <JudgeReviews
          reviews={reviews}
          setReviewsLayout={setReviewsLayout}
          productID={productID}
        />
      ) : (
        <motion.div>
          {loading ? (
            <LoadingScreen size="small" />
          ) : (
            <>
              {adminProducts.map((product, index) => {
                if (product.reviews.length) {
                  return (
                    <CardWrapper
                      key={index}
                      layout
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                      onClick={() => {
                        setReviews(product.reviews);
                        setProductID(product._id);
                        setReviewsLayout(true);
                      }}
                    >
                      <Left>
                        <p className="admin-CardWrapper-index">{index + 1}</p>
                        <p>
                          name : <span>{product.name}</span>
                        </p>
                        <p>
                          number of Reviews :{" "}
                          <span>{product.numOfReviews}</span>
                        </p>
                      </Left>
                    </CardWrapper>
                  );
                }
              })}
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ReviewsLayout;
