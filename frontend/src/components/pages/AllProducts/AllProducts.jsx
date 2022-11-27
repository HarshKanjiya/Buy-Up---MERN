import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/productSlice";
import { Body, Container, Title } from "./AllProducts.styles";
import ProductCardView from "../../components/productCardView";
import LoadingScreen from "../../components/LoadingScreen.jsx"
import { useParams } from "react-router-dom";

const AllProducts = () => {
  const dispatch = useDispatch();
  const params = useParams()
  const { loading, error, productInfo } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
      dispatch(fetchProducts(params.keyword));
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : productInfo.products ? (
        <Container>
          <Title>
            <h1>All Products</h1>
          </Title>
          <Body>
            {productInfo.products.map((product, index) => (
              <ProductCardView product={product} key={index} />
            ))}
          </Body>
        </Container>
      ) : null}
    </>
  );
};

export default AllProducts;
