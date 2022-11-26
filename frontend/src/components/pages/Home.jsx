import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";

import HeroSectionCarousel from "../layouts/HeroSectionCarousel";
import ProductList from "../layouts/productList";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( fetchProducts() );
  }, []);



  return (
    <>
      <HeroSectionCarousel />
      <ProductList />
    </>
  );
};

export default Home;
