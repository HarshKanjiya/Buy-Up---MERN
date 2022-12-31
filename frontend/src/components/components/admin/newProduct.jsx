import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearErrorsInAdmin,
  clearSuccessInAdmin,
  createProduct,
  getAdminProducts,
} from "../../../redux/slices/AdminSlice";
import {
  HeaderElementsWrapper,
  HeadLine,
} from "../../layouts/dashboard/dashboard/DashboardLayout.styles";
import { Alert } from "../Alert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import ClassIcon from "@mui/icons-material/Class";
import FeedIcon from "@mui/icons-material/Feed";
import InventoryIcon from "@mui/icons-material/Inventory";
import ImageIcon from "@mui/icons-material/Image";
import LoadingScreen from "../LoadingScreen";

const CATEGORIES = ["smartphone", "laptop", "camera", "earbud", "smartwatch"];

const NewProduct = ({ setLayerSelector }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorInAdmin, loading, success } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (errorInAdmin) {
      Alert({
        title: "Oops!",
        icon: "error",
        text: errorInAdmin,
      });
      dispatch(clearErrorsInAdmin());
    }
    if (success) {
      Alert({
        text: "Product created!",
      });
      dispatch(getAdminProducts({}));
      dispatch(clearSuccessInAdmin());
      setLayerSelector("main");
    }
  }, [errorInAdmin, success]);

  const [details, setDetails] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });
  const [imgPreview, setImgPreview] = useState([]);
  const [images, setimages] = useState([]);

  const Imghandler = (e) => {
    const files = Array.from(e.target.files);
    setimages([]);
    setImgPreview([]);

    files.forEach((i) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgPreview((old) => [...old, reader.result]);
          setimages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(i);
    });
  };

  const submitHandler = () => {
    const myForm = new FormData();
    myForm.set("name", details.name);
    myForm.set("description", details.description);
    myForm.set("category", details.category);
    myForm.set("stock", details.stock);
    myForm.set("price", details.price);

    images.forEach((img) => myForm.append("images", img));
    dispatch(createProduct(myForm));
  };

  return (
    <div>
      <HeaderElementsWrapper>
        <BackBtn
          onClick={() => {
            setLayerSelector("main");
          }}
        >
          <ArrowBackIcon />
        </BackBtn>
        <HeadLine> New Product</HeadLine>
      </HeaderElementsWrapper>
      {loading ? (
        <LoadingScreen size="small" />
      ) : (
        <>
          <FormWrapper>
            <Form>
              <FormEle>
                <SpellcheckIcon fontSize="small" />
                <InputText
                  variant="standard"
                  label="Product Name"
                  value={details.name}
                  onChange={(e) => {
                    setDetails({ ...details, name: e.target.value });
                  }}
                />
              </FormEle>
              <FormEle>
                <FeedIcon fontSize="small" />
                <InputText
                  multiline
                  maxRows={4}
                  variant="standard"
                  label="Description"
                  value={details.description}
                  onChange={(e) => {
                    setDetails({ ...details, description: e.target.value });
                  }}
                />
              </FormEle>
              <FormEle>
                <p className="admin-product-price">₹</p>
                <InputText
                  variant="standard"
                  label="Price"
                  value={details.price}
                  onChange={(e) => {
                    setDetails({ ...details, price: e.target.value });
                  }}
                />
              </FormEle>
              <FormEle>
                <InventoryIcon fontSize="small" />
                <InputText
                  variant="standard"
                  label="Stock"
                  value={details.stock}
                  onChange={(e) => {
                    setDetails({ ...details, stock: e.target.value });
                  }}
                />
              </FormEle>
              <FormEle>
                <ClassIcon fontSize="small" />
                <select
                  onChange={(e) => {
                    setDetails({ ...details, category: e.target.value });
                  }}
                >
                  <option value="">Select Category</option>
                  {CATEGORIES.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </FormEle>
              <FormEle>
                <ImageIcon />
                <input
                  type="file"
                  multiple
                  name="product images"
                  accept="image/*"
                  onChange={(e) => Imghandler(e)}
                />
              </FormEle>
              <FormEle>
                <div className="admin-product-img-prev">
                  {imgPreview.map((i, index) => (
                    <img key={index} src={i} alt="img" />
                  ))}
                </div>
              </FormEle>
            </Form>

            <SubmitBtn onClick={submitHandler}>SUBMIT</SubmitBtn>
          </FormWrapper>
        </>
      )}
    </div>
  );
};

export default NewProduct;

const BackBtn = styled.div`
  background-color: white;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 2rem;
  display: grid;
  place-content: center;
  margin: 0 1rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  transition: 300ms;
  &:hover {
    box-shadow: 0 0 1.7rem rgba(0, 0, 0, 0.16);
    transform: rotate(360deg);
  }
`;

const FormWrapper = styled.div`
  width: max-content;
  margin: 0 auto;
`;
const Form = styled.div`
  width: max-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 1rem;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  margin: 1rem auto;
`;
const SubmitBtn = styled.button`
  width: 100%;
  padding: 1rem;
  letter-spacing: 1.3px;
  background-color: #2bb594;
  border: 2px solid white;
  color: white;
  border-radius: 7px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  margin: 0 auto;
`;
const FormEle = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  overflow-x: hidden;
  color: #898989;
  img {
    width: auto;
    height: 3rem;
  }

  select {
    color: #232323;
    margin: 0.5rem 0;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid #565656;
    padding: 0.2rem 0.5rem;

    &:focus {
      border-color: #2bb594;
    }
  }
  .admin-product-price {
    font-size: 1.3rem;
    margin: 0 0.25rem;
  }
  .admin-product-img-prev {
    max-width: 500px;
    overflow: auto;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;
const InputText = styled(TextField)`
  width: 100%;
  color: #232323;
  & label.Mui-focused {
    color: #2bb594;
  }

  & .MuiInput-underline:after {
    border-color: #2bb594;
  }
`;
