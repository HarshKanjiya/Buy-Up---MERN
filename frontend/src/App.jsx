import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layouts/Footer'

import Header from './components/layouts/Header'
import ProductPage from './components/layouts/ProductPage/ProductPage'
import Home from './components/pages/Home'

function App() {
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
