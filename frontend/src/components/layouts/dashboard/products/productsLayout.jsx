import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeadLine } from "../dashboard/DashboardLayout.styles";
import {
  AdminBtn,
  CardWrapper,
  Header,
  Left,
  Right,
  Wrapper,
} from "./productsLayout.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { AnimatePresence, motion } from "framer-motion";
import NewProduct from "../../../components/admin/newProduct";

const ProductsLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, isAuthenticated } = useSelector((state) => state.user);
  const { errorInAdmin, loading, adminProducts } = useSelector(
    (state) => state.admin
  );
  const [layerSelector, setLayerSelector] = useState("main"); // main // edit // new

  return (
    <Wrapper>
      <AnimatePresence initial={false} mode="wait">
        {layerSelector === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3, type: "tween" }}
          >
            <Header>
              <HeadLine>All Products</HeadLine>
              <AdminBtn
                whileTap={{ backgroundColor: "#035440" }}
                transition={{ duration: 0.15 }}
                onClick={() => {
                  setLayerSelector("new");
                }}
              >
                + <p>ADD PRODUCT</p>
              </AdminBtn>
            </Header>

            {adminProducts.map((product, index) => (
              <CardWrapper key={index}>
                <Left>
                  <p className="admin-CardWrapper-index">{index + 1}</p>
                  <p>
                    Name : <span>{product.name}</span>
                  </p>
                  <p>
                    &nbsp;Stock : <span>{product.stock}</span>
                  </p>
                </Left>
                <Right>
                  <button
                    className="admin-products-edit"
                    onClick={() => {
                      setLayerSelector("edit");
                    }}
                  >
                    <EditIcon />
                  </button>
                  <button className="admin-products-delete">
                    <DeleteIcon />
                  </button>
                </Right>
              </CardWrapper>
            ))}
          </motion.div>
        )}
        {layerSelector === "new" && (
          <div
            key="new"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3, type: "tween" }}
          >
           <NewProduct setLayerSelector={setLayerSelector} />
          </div>
        )}
        {layerSelector === "edit" && (
          <div
            key="edit"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3, type: "tween" }}
          >
            <>edit</>
            <div
              onClick={() => {
                setLayerSelector("main");
              }}
            >
              go back
            </div>
          </div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default ProductsLayout;
