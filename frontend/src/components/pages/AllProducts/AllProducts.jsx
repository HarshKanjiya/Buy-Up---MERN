import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, fetchProducts } from "../../../redux/slices/productSlice";
import {
  Body,
  Container,
  ProductPagination,
  Title,
} from "./AllProducts.styles";
import LoadingScreen from "../../components/LoadingScreen.jsx";
import { useParams } from "react-router-dom";
import HeadBar from "../../layouts/HeadBar/HeadBar";
import ProductPageProductCardView from "../../components/ProductPageProductCardView";
import Header from "../../layouts/NavBar/Header";
import Footer from "../../layouts/Footer";
import { Alert } from "../../components/Alert";
import { motion } from "framer-motion";

const AllProducts = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { loading, error, productInfo, resultPerPage } = useSelector(
    (state) => state.products
  );


  const [page, setPage] = useState(1);
  useEffect(() => {
    if (error) {
      Alert({
        icon: "error",
        text: error,
        title: "Oops!",
      });
      dispatch(clearErrors());
    }
    dispatch(
      fetchProducts({
        category: params.keyword,
        page,
      })
    );
  }, [page]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : productInfo.products ? (
        <motion.div
          key={"allProductsPage"}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{
        //   duration: 0.4,
        // }}
        >
          <Header />
          <HeadBar page="products" />
          <Container>
            <Title>
              <h1>Products</h1>
            </Title>
            <Body>
              {productInfo.products.map((product, index) => (
                <ProductPageProductCardView product={product} key={index} />
              ))}
            </Body>
            {/* {resultPerPage <= productInfo.products.length ? ( */}
            <ProductPagination
              count={Math.ceil((productInfo.products.length >= 15 ? productInfo.productCount : productInfo.products.length) / resultPerPage)}
              boundaryCount={2}
              showFirstButton
              showLastButton
              page={page}
              onChange={(event, value) => {
                setPage(value);
              }}
            />
            {/* ) : null} */}
          </Container>
          <Footer />
        </motion.div>
      ) : null}
    </>
  );
};

export default AllProducts;
