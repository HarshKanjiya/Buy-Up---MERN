import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layouts/Footer'

import Header from './components/layouts/Header'
import ProductPage from './components/layouts/ProductPage/ProductPage'
import AllProducts from './components/pages/AllProducts/AllProducts'
import Home from './components/pages/home/Home'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Header />
    <AnimatePresence >
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/product/:id" element={<ProductPage />} />
      <Route exact path="/products" element={<AllProducts />} />
      <Route path="/products/:keyword" element={<AllProducts />} />
    </Routes>
    </AnimatePresence>
     <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
