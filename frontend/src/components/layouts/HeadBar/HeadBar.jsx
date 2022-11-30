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
  Categories,
  Category,
} from "./HeadBar.style";
import TuneIcon from "@mui/icons-material/Tune";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';

const HeadBar = ({ page = "home" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState("");
  const [filterOpener, setFilterOpener] = useState(false);
  const [sliderValue, setSliderValue] = useState([0, 150000]);
  const [filterRating, setFilterRating] = useState(null);
  const [categorySelection, setcategorySelection] = useState(null);

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
  const HelperForProductPageDispatchs = (category) => {
    dispatch(
      fetchProducts({
        category: category,
      })
    );
  };
 
  const QuickActionHome = (v) => {
    navigate(`products/${v}`);
    dispatch(fetchProducts({ category: v }));
  };

// filter applicationnnnnnnnnnnnn
  const FilterBoxExited = () => {
    setFilterOpener(false)
    setFilterRating(null)
    setSliderValue([0,150000])
    setcategorySelection('')
  }
  const ApplyFilterProductPage = () => {
    setFilterRating(null)
    setcategorySelection('')
    dispatch(
      fetchProducts({
        price: sliderValue,
        category: categorySelection,
        ratings:filterRating
      })
    );
  };
  return (
    <>
      {page === "home" ? (
        <HeadBarWrapper>
          {/* for home page */}
          <div className="HeadBar-left">
            <HeadBarElement
              onClick={() => {
                QuickActionHome("");
              }}
            >
              ALL
            </HeadBarElement>

            <HeadBarElement
              onClick={() => {
                QuickActionHome("smartphone");
              }}
            >
              PHONES
            </HeadBarElement>
            <HeadBarElement
              onClick={() => {
                QuickActionHome("laptop");
              }}
            >
              LAPTOP
            </HeadBarElement>

            <HeadBarElement
              onClick={() => {
                QuickActionHome("smartwatch");
              }}
            >
              SMART WATCH
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
              <button onClick={HelperSearchClick}>
                <SearchIcon />
              </button>
            </HeadBarElementSearchInput>
            {page !== "home" ? (
              <HeadBarElementFilter
                variant="contained"
                onClick={() => {
                  setFilterOpener(true);
                }}
              >
                <TuneIcon />
              </HeadBarElementFilter>
            ) : null}
          </div>
        </HeadBarWrapper>
      ) : (
        <HeadBarWrapper>
          {/* for products */}
          <div className="HeadBar-left">
            <Link
              to="/products"
              onClick={() => {
                HelperForProductPageDispatchs("");
              }}
            >
              <HeadBarElement>ALL</HeadBarElement>
            </Link>
            <Link
              to="/products/smartphone"
              onClick={() => {
                HelperForProductPageDispatchs("smartphone");
              }}
            >
              <HeadBarElement>PHONES</HeadBarElement>
            </Link>
            <Link
              to="/products/laptop"
              onClick={() => {
                HelperForProductPageDispatchs("laptop");
              }}
            >
              <HeadBarElement>LAPTOP</HeadBarElement>
            </Link>
            <Link
              to="/products/smartwatch"
              onClick={() => {
                HelperForProductPageDispatchs("smartwatch");
              }}
            >
              <HeadBarElement>SMART WATCH</HeadBarElement>
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

      {/* for  product */}
      <FilterDialog
        open={filterOpener}
        onClose={FilterBoxExited}
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

          {/* catogories */}
          <p>category</p>
          <Categories>
            <Category
              onClick={() => {
                setcategorySelection("smartphone");
              }}
              disabled={categorySelection === "smartphone"}
            >
              SMART PHONE
            </Category>
            <Category
              onClick={() => {
                setcategorySelection("laptop");
              }}
              disabled={categorySelection === "laptop"}
            >
              LAPTOP
            </Category>
            <Category
              onClick={() => {
                setcategorySelection("smartwatch");
              }}
              disabled={categorySelection === "smartwatch"}
            >
              SMART WATCH
            </Category>
            <Category
              onClick={() => {
                setcategorySelection("case");
              }}
              disabled={categorySelection === "case"}
            >
              CASE
            </Category>
            <Category
              onClick={() => {
                setcategorySelection("fitband");
              }}
              disabled={categorySelection === "fitband"}
            >
              FIT BAND
            </Category>
            <Category
              onClick={() => {
                setcategorySelection("earbuds");
              }}
              disabled={categorySelection === "earbuds"}
            >
              EAR BUDS
            </Category>
            <Category
              onClick={() => {
                setcategorySelection("earphones");
              }}
              disabled={categorySelection === "earphones"}
            >
              EAR PHONES
            </Category>
          </Categories>

          {/* rating */}
          <p>minimum rating</p>
          <FilterDialogSlider
            valueLabelDisplay={ filterRating === null ? "auto":'on' }
            onChange={(e, newValue) => {
              setFilterRating(newValue);
            }}
            min={0}
            max={5}
          />
          {/* button */}
          <FilterDialogFooter>
            <FilterDialogFooterButton onClick={ApplyFilterProductPage}>
              sort <SortIcon />
            </FilterDialogFooterButton>
          </FilterDialogFooter>
        </FilterDialogContent>
      </FilterDialog>
    </>
  );
};

export default HeadBar;
