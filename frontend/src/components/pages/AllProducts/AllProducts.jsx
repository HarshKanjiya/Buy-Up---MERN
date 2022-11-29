import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/productSlice";
import {
  Body,
  Container,
  ProductPagination,
  Title,
} from "./AllProducts.styles";
import ProductCardView from "../../components/productCardView";
import LoadingScreen from "../../components/LoadingScreen.jsx";
import { useParams } from "react-router-dom";
import HeadBar from "../../layouts/HeadBar/HeadBar";

const AllProducts = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { loading, error, productInfo, resultPerPage } = useSelector(
    (state) => state.products
  );

  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(
      fetchProducts({
        keyword: params.keyword,
        page,
      })
    );
  }, [page]);


  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : productInfo.products ? (<>
        <HeadBar page="products" />
        <Container>
          <Title>
            <h1>All Products</h1>
          </Title>
          <Body>
            {productInfo.products.map((product, index) => (
              <ProductCardView product={product} key={index} />
            ))}
          </Body>
          {resultPerPage <= productInfo.products.length ? (
            <ProductPagination
              count={Math.ceil(productInfo.productCount / resultPerPage)}
              boundaryCount={2}
              showFirstButton
              showLastButton
              page={page}
              onChange={(event, value) => {
                setPage(value);
              }}
            />
          ) : null}
        </Container>
      </>) : null}
    </>
  );
};

export default AllProducts;
