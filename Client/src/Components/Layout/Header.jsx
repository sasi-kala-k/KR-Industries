import React from 'react'
import logoImg from '../../assets/logo_img.svg'
import { NavLink, useNavigate } from "react-router-dom"
// import './Layout.css'

function Header() {
  const navigate = useNavigate();
  const closeMenu = () => {
    const navbarCollapse = document.getElementById('navbarnav')
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show')
    }
  }
  return (
    // < style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#262222' }}>

    <nav className="navbar navbar-expand-lg align-items-center header px-0 px-lg-5 header position-fixed"  >
      <div className="container-fluid "  >
        <a href="/" className="navbar-brand  flex-lg-grow-1">
          <img src={logoImg} alt="logo" height={50} /><span className="cus-logo ms-2">KR Industries</span>
        </a>
        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarnav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarnav">
          <div className="d-flex flex-column flex-lg-row align-items-start  align-items-lg-center gap-1 gap-lg-4">
            <NavLink className="cus-nav-link" to="/" onClick={closeMenu}>HOME</NavLink>
            <NavLink className="cus-nav-link" to="/about" onClick={closeMenu}>ABOUT US</NavLink>
            <NavLink className="cus-nav-link" to="/products" onClick={closeMenu}>PRODUCTS</NavLink>
            <NavLink className="cus-nav-link" to="/trading" onClick={closeMenu}>TRADING</NavLink>
            <NavLink className="cus-nav-link" to="/gallery" onClick={closeMenu}>GALLERY</NavLink>
            <NavLink className="cus-nav-link" to="/infra-facility" onClick={closeMenu}>Infrastructure & Facility</NavLink>

            <div className="d-flex flex-column d-lg-none align-content-start">
              <hr className="cus-hr" />
              <button className="btn fw-semibold toggle-contact" onClick={() => {navigate('/contact'); closeMenu(); }} > Contact Us</button>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-flex ms-0">
        <button className="btn cus-btn-brownFill" onClick={() => navigate('/contact')} >CONTACT US</button>
      </div>
    </div>
    </nav >
    
  )
}

export default Header
