import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorsInAdmin,
  updateProduct,
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
import { motion } from "framer-motion";

const CATEGORIES = ["smartphone", "laptop", "camera", "earbud", "smartwatch"];

const EditProduct = ({ setLayerSelector, product }) => {
  const dispatch = useDispatch();
  const { errorInAdmin, loading, editedSuccess } = useSelector(
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
    if (editedSuccess) {
      setLayerSelector("main");
    }
  }, [errorInAdmin]);

  let oldImgSet = [];
  product.images.map((i) => {
    oldImgSet.push(i.url);
  });

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [Stock, setStock] = useState(product.stock);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState(oldImgSet);
  const [imagesPreview, setImagesPreview] = useState([]);



  const Imghandler = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((i) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(i);
    });
  };

  const submitHandler = () => {
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateProduct({ id: product._id, newDetails: myForm }));
  };

  return (
    <motion.div
      key="edit"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <HeaderElementsWrapper>
        <BackBtn
          onClick={() => {
            setLayerSelector("main");
          }}
        >
          <ArrowBackIcon />
        </BackBtn>
        <HeadLine> Edit Product</HeadLine>
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
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
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
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </FormEle>
              <FormEle>
                <p className="admin-product-price">₹</p>
                <InputText
                  variant="standard"
                  label="Price"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </FormEle>
              <FormEle>
                <InventoryIcon fontSize="small" />
                <InputText
                  variant="standard"
                  label="Stock"
                  value={Stock}
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
              </FormEle>
              <FormEle>
                <ClassIcon fontSize="small" />
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
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
                  {oldImages.map((i, index) => (
                    <img key={index} src={i} alt="img" />
                  ))}
                  {imagesPreview.map((i, index) => (
                    <img key={index} src={i} alt="img" />
                  ))}
                </div>
              </FormEle>
            </Form>

            <SubmitBtn onClick={submitHandler}>SUBMIT</SubmitBtn>
          </FormWrapper>
        </>
      )}
    </motion.div>
  );
};

export default EditProduct;

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
