import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, fetchProducts } from "../../../redux/slices/productSlice";
import LoadingScreen from "../../components/LoadingScreen";
import HeadBar from "../../layouts/HeadBar/HeadBar";
import HeroSectionCarousel from "../../layouts/HeroSectionCarousel";
import ProductList from "../../layouts/productList";
import Header from "../../layouts/NavBar/Header";
import Footer from "../../layouts/Footer";
import { Alert } from "../../components/Alert";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, error, productInfo } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      Alert({
        icon: "warning",
        text: "Please, Check your Network and refresh",
      });
      dispatch(clearErrors());
    }
    dispatch(fetchProducts({}));
  }, []);

  if (productInfo === "Network Error") {
    Alert({
      icon: "warning",
      text: "Please, Check your Network and refresh",
    });
  }

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          key={"homePage"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
          }}

        >
          <Header />
          <HeadBar />
          <HeroSectionCarousel />
          <ProductList />
          <ProductList category="laptop" />
          <ProductList category="smartphone" />
          <ProductList category="earbud" />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Home;
