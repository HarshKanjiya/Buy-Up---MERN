import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../redux/slices/productSlice";
import {
  HeadBarWrapper,
  HeadBarElement,
  HeadBarElementFilter,
  HeadBarElementSearchInput,
  FilterDialog,
  FilterDialogTitle,
  FilterDialogContent,
  FilterDialogSlider,
  FilterDialogFooter,
  FilterDialogFooterButton,
} from "./HeadBar.style";
import TuneIcon from "@mui/icons-material/Tune";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const HeadBar = ({ page = "home" }) => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  const [filterOpener, setFilterOpener] = useState(false);
  const [sliderValue, setSliderValue] = useState([0, 150000]);

  const HelperSearchClick = () => {
    if (searchString.trim()) {
      navigate(`/products/${searchString.split(" ").join("")}`);
    }
  };
  const HelperSearchClickForProductPage = () => {
    if (searchString.trim()) {
      dispatch(
        fetchProducts({
          keyword: searchString.split(" ").join(""),
          page: 1,
        })
      );
    }
  };

  const HelperForProductPageDispatchs = (key) => {
    dispatch(
      fetchProducts({
        keyword: key,
        page: 1,
      })
    );
  };

  return (
    <>
      {page === "home" ? (
        <HeadBarWrapper>
          {/* for home page */}
          <div className="HeadBar-left">
            <Link to="/products">
              <HeadBarElement>ALL</HeadBarElement>
            </Link>
            <Link to="/products/smartphone">
              <HeadBarElement>PHONES</HeadBarElement>
            </Link>
            <Link to="/products/laptop">
              <HeadBarElement>LAPTOP</HeadBarElement>
            </Link>
            <Link to="/products/smartfit">
              <HeadBarElement>SMART FIT</HeadBarElement>
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
            <HeadBarElementFilter
              variant="contained"
              onClick={() => {
                setFilterOpener(true);
              }}
            >
              <TuneIcon />
            </HeadBarElementFilter>
          </div>
        </HeadBarWrapper>
      ) : (
        <HeadBarWrapper>
          {/* for products */}
          <div className="HeadBar-left">
          <Link to="/products" >
            <HeadBarElement
              onClick={() => {
                HelperForProductPageDispatchs("");
              }}
            >
              ALL
            </HeadBarElement>
          </Link>
          
            <HeadBarElement
              onClick={() => {
                HelperForProductPageDispatchs("smartphone");
              }}
            >
              PHONES
            </HeadBarElement>
            <HeadBarElement
              onClick={() => {
                HelperForProductPageDispatchs("laptop");
              }}
            >
              LAPTOP
            </HeadBarElement>
            <HeadBarElement
              onClick={() => {
                HelperForProductPageDispatchs("smartfit");
              }}
            >
              SMART FIT
            </HeadBarElement>
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
              <button onClick={HelperSearchClickForProductPage}>
                <SearchIcon />
              </button>
            </HeadBarElementSearchInput>
            <HeadBarElementFilter
              variant="contained"
              onClick={() => {
                setFilterOpener(true);
              }}
            >
              <TuneIcon />
            </HeadBarElementFilter>
          </div>
        </HeadBarWrapper>
      )}
      <FilterDialog
        open={filterOpener}
        onClose={() => {
          setFilterOpener(false);
        }}
      >
        <FilterDialogTitle>Filter</FilterDialogTitle>
        <Divider />
        <FilterDialogContent>
          <p>Price</p>
          <FilterDialogSlider
            min={0}
            max={150000}
            getAriaLabel={() => "Price range"}
            value={sliderValue}
            valueLabelDisplay="auto"
            onChange={(e, newValue) => {
              setSliderValue(newValue);
            }}
          />
          <FilterDialogFooter>
            <FilterDialogFooterButton>
              {" "}
              send <SendIcon />
            </FilterDialogFooterButton>
          </FilterDialogFooter>
        </FilterDialogContent>
      </FilterDialog>
    </>
  );
};

export default HeadBar;
