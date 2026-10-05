import React from 'react'
import StatsSection from "../Components/Home/StatsSection"
import { FaPlay } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import video from '../assets/hero-video.svg'
import AboutSection from "../Components/Home/AboutSection"
import CreativeWork from "../Components/Home/CreativeWork"
import Mission from "../Components/Home/Mission"
import Services from "../Components/Home/Services"
import OurWorkSection from "../Components/Home/OurWorkSection"
import Guarantee from "../Components/Home/Guarantee"
import ImportCountries from "../Components/Home/ImportCountries"
import OurProducts from "../Components/Home/OurProducts"
import FAQ from "../Components/Home/FAQ"
import Testimonials from "../Components/Home/Testimonials"

function Home() {
  return (
    <>
      <div className="px-3 px-lg-5 mx-lg-5 ">
        <div className="row g-1 g-lg-5 align-items-center">
          <div className="col-12 col-lg-9  py-lg-5 my-lg-5" style={{ maxWidth: '830px' }}>
            <div className="position-relative ">
              <div className="row d-none d-lg-flex ">
                <div className="col-4">

                </div>
                <div className="col-8">
                  <div className="hero-left">
                  </div>
                </div>
              </div>

                 <div className="hero-left-mobile d-lg-none"></div>

              <div className="hero-content-wrapper position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-start justify-content-center py-2 gap-3">
                <small className="text-secondary">KR Industries</small>
                <h1 className="display-5 hero-heading fw-bold">Best quality of wooden items to fill the thirst in packing industries</h1>
                <p className="text-secondary fs-6 w-75 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="d-flex flex-lg-row flex-column align-items-center gap-2">
                  <button className=" cus-btn-brownFill ">OUR PRODUCT<FaArrowRightLong className="ms-2 fs-6" /></button>
                  <button className=" cus-btn-brownBorder ">EXPLORE MORE <FaArrowRightLong className="ms-2 fs-6" /></button>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="d-flex align-items-center justify-content-center  hero-video"
              /* <video controls width="100%" className="w-100 rounded-4"  style={{ maxHeight:"380px"}}>
                  <source src={myVideo} alt="myVideo" type="video/mp4" /> 
              </video> */
              style={{ backgroundImage: `url(${video})` }}>
              <button className="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center cus-play-btn shadow" style={{ height: '90px', width: '90px' }}>
                <FaPlay className="text-muted" style={{ height: '35px', width: '27px' }} />
              </button>
            </div>

          </div>

        </div>


      </div>
      <StatsSection />
      <AboutSection />
      <CreativeWork />
      <Mission />
      <Services/>
      <OurWorkSection/>
      <Guarantee/>
      <OurProducts />
      <FAQ/>
      <Testimonials/>
      <ImportCountries/>
      

    </>
  )
}

export default Home
     