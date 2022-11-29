import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/productSlice";
import LoadingScreen from "../../components/LoadingScreen";
import HeadBar  from "../../layouts/HeadBar/HeadBar";
import HeroSectionCarousel from "../../layouts/HeroSectionCarousel";
import ProductList from "../../layouts/productList";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(fetchProducts({}));
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <HeadBar/>
          <HeroSectionCarousel />
          <ProductList />
        </>
      )}
    </>
  );
};

export default Home;
