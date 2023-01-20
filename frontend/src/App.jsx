import { createTheme } from "@mui/system";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
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
import Shipping from "./components/pages/shipping/Shipping";
import {
  GET_SHIPPING_INFO_FROM_LOCALSTORAGE,
  setCartFromLocalStorage,
} from "./redux/slices/cartPageSlice";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./components/pages/orders/Orders";
import { getUserOrders } from "./redux/slices/OrderSlice";


function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    dispatch(loadUser({}));
    dispatch(getUserOrders({}));
    dispatch(setCartFromLocalStorage());
    dispatch(GET_SHIPPING_INFO_FROM_LOCALSTORAGE());
    getStripeApiKey();
  }, []);

  const getStripeApiKey = async () => {
    const { data } = await axios.get("/api/v1/payment/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  };

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
          <Route
            exact
            path="/password/reset/:token"
            element={<ResetPassword />}
          />

          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/cart" element={<Cart />} />

          <Route exact path="/orders" element={<Orders/>} />
        </Routes>

        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)} >
            <Routes key={location.pathname} location={location}>
              <Route exact path="/shipping" element={<Shipping />} />
            </Routes>
          </Elements>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
