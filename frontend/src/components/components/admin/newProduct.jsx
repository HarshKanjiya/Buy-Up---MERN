import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearErrorsInAdmin,
  clearSuccessInAdmin,
  createProduct,
} from "../../../redux/slices/AdminSlice";
import { HeadLine } from "../../layouts/dashboard/dashboard/DashboardLayout.styles";

import { Alert } from "../Alert";

import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import ClassIcon from "@mui/icons-material/Class";
import FeedIcon from "@mui/icons-material/Feed";
import InventoryIcon from "@mui/icons-material/Inventory";

const CATEGORIES = ["smartphone", "laptop", "camera", "earbud", "smartwatch"];

const NewProduct = ({ setLayerSelector }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, isAuthenticated } = useSelector((state) => state.user);
  const { errorInAdmin, loading, adminProducts, success } = useSelector(
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
      setLayerSelector("main");
      dispatch(clearSuccessInAdmin());
    }
  }, [errorInAdmin, success]);

  const [details, setDetails] = useState({
    name: "",
    description: "",
    price: null,
    images: [],
    category: "",
    stock: null,
  });
  const [imgPreview, setImgPreview] = useState([]);

  const Imghandler = (e) => {
    const files = Array.from(e.target.files);
    setDetails({ ...details, images: [] });
    setImgPreview([]);

    files.forEach((i) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgPreview((old) => [...old, reader.result]);
          setDetails({ ...details, images: (old) => [...old, reader.result] });
        }
      };
    });
  };

  const submitHandler = () => {
    const myForm = new FormData();
    myForm.set("name", details.name);
    myForm.set("description", details.description);
    myForm.set("category", details.category);
    myForm.set("stock", details.stock);

    details.images.forEach((img) => myForm.append("images", img));
    dispatch(createProduct(myForm));
  };

  return (
    <div>
      <HeadLine>New Product</HeadLine>
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
          <p>dd</p>
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
      </Form>
    </div>
  );
};

export default NewProduct;

const Form = styled.div`
  width: max-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  margin: 1rem auto;
`;
const FormEle = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  color: #898989;
  select {
    color: #232323;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid #565656;
    padding: 0.2rem 0.5rem;

    &:focus {
      border-color: #2bb594;
    }
  }
`;
const InputText = styled(TextField)`
  min-width: 270px;
  color: #232323;
  & label.Mui-focused {
    color: #2bb594;
  }

  & .MuiInput-underline:after {
    border-color: #2bb594;
  }
`;
