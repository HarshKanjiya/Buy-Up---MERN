import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/productSlice";
import LoadingScreen from "../../components/LoadingScreen";
import SearchIcon from "@mui/icons-material/Search";

import HeroSectionCarousel from "../../layouts/HeroSectionCarousel";
import ProductList from "../../layouts/productList";
import {
  HeadBar,
  HeadBarElement,
  HeadBarElementSearchInput,
} from "./Home.styles";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.products);

  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const HelperSearchClick = () => {
    if (searchString.trim()) {
      navigate(`/products/${searchString.split(" ").join("")}`);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <HeadBar>
            <div className="HeadBar-left">
              <Link to="/products">
                <HeadBarElement>ALL PRODUCTS</HeadBarElement>
              </Link>
              <Link to="/products/smartphone">
                <HeadBarElement>PHONES</HeadBarElement>
              </Link>
              <Link to="/products/laptop">
                <HeadBarElement>LAPTOP</HeadBarElement>
              </Link>
            </div>
            <div className="HeadBar-right">
              <HeadBarElementSearchInput className="">
                <input
                  value={searchString}
                  onChange={(e) => {
                    setSearchString(e.target.value);
                  }}
                  placeholder="I Phone"
                />
                <button onClick={HelperSearchClick}>
                  <SearchIcon />
                </button>
              </HeadBarElementSearchInput>
            </div>
          </HeadBar>
          <HeroSectionCarousel />
          <ProductList />
        </>
      )}
    </>
  );
};

export default Home;
