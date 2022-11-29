import { createTheme } from "@mui/system";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";

import Header from "./components/layouts/Header";
import AllProducts from "./components/pages/AllProducts/AllProducts";
import Home from "./components/pages/home/Home";
import ProductPage from "./components/pages/ProductPage/ProductPage";


const lightTheme = {
  body : "#fff",
  title : "#fff",
  subTitle : "#b6b6b6",
}

const themez = createTheme({
  status: {
    danger: "#232323",
  },
});


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AnimatePresence>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:id" element={<ProductPage />} />
            <Route exact path="/products" element={<AllProducts />} />
            <Route path="/products/:keyword" element={<AllProducts />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
