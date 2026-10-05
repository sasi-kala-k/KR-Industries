import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./Components/ScrollToTop"
import Layout from './Components/Layout/Layout'
import Home from "./Pages/Home"
import AboutUs from './Pages/AboutUs'
import Products from './Pages/Products'
import Trading from "./Pages/Trading"
import Gallery from './Pages/Gallery'
import Infrastructure from './Pages/Infrastructure'
import ContactUs from './Pages/ContactUs'

function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/infra-facility" element={<Infrastructure />} />
            <Route path="/contact" element={<ContactUs />} />
            

          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
