import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, fetchProducts } from "../../../redux/slices/productSlice";
import LoadingScreen from "../../components/LoadingScreen";
import HeadBar from "../../layouts/HeadBar/HeadBar";
import HeroSectionCarousel from "../../layouts/HeroSectionCarousel";
import ProductList from "../../layouts/productList";
import Swal from "sweetalert2";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, error, productInfo } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "warning",
        text: "Please, Check your Network and refresh",
      });
      dispatch(clearErrors());
    }
    dispatch(fetchProducts({}));
  }, []);

  if (productInfo === "Network Error") {
    Swal.fire({
      icon: "warning",
      text: "Please, Check your Network and refresh",
    });
  }

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <HeadBar />
          <HeroSectionCarousel />
          <ProductList />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
