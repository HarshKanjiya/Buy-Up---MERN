import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebFont from "webfontloader"
import Footer from './components/layouts/Footer'

import Header from './components/layouts/Header'
import ProductPage from './components/layouts/ProductPage'
import Home from './components/pages/Home'

function App() {

  useEffect(()=>{
    WebFont.load({
      gogle:{
        family:["Poppins","Roboto"]
      }
    })
  },[])

  return (
    <div className="App">
     <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product/:id" element={<ProductPage />} />
    </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  )
}

export default App
