import { createTheme } from "@mui/system";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";

import Header from "./components/layouts/Header";
import AllProducts from "./components/pages/AllProducts/AllProducts";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/login";
import ProductPage from "./components/pages/ProductPage/ProductPage";
import Profile from "./components/pages/Profile/profile";
import { loadUser } from "./redux/slices/userSlice";

const lightTheme = {
  body: "#fff",
  title: "#fff",
  subTitle: "#b6b6b6",
};

const themez = createTheme({
  status: {
    danger: "#232323",
  },
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  });
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:id" element={<ProductPage />} />
            <Route exact path="/products" element={<AllProducts />} />
            <Route path="/products/:keyword" element={<AllProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
