import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import webfont from "webfontloader";
import { useEffect } from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  useEffect(() => {
    webfont.load({
      google: {
        families: ["Poppins", "Roboto"],
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path="/" element={ <Home/> } />
</Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
