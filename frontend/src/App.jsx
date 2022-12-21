import { createTheme } from "@mui/system";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AboutMe from "./components/pages/about/AboutMe";
import Cart from "./components/pages/cart/Cart";
import AllProducts from "./components/pages/AllProducts/AllProducts";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/login";
import ProductPage from "./components/pages/ProductPage/ProductPage";
import Profile from "./components/pages/Profile/profile";
import { loadUser } from "./redux/slices/userSlice";
import Dashboard from "./components/pages/dashboard/Dashboard";
import { UpdateProfile } from "./components/pages/update Profile/UpdateProfile";
import UpdatePassword from "./components/pages/update Password/UpdatePassword";
import ResetPassword from "./components/pages/ResetPassword/ResetPassword";

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
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser({}));
  }, []);
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route exact path="/products" element={<AllProducts />} />
          <Route path="/products/:keyword" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutme" element={<AboutMe />} />
         
          
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/profile/update" element={<UpdateProfile />} />
          <Route exact path="/profile/password" element={<UpdatePassword />} />
          <Route exact path="/password/reset/:token" element={<ResetPassword />} />

          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/cart" element={<Cart />} />
         
         
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
