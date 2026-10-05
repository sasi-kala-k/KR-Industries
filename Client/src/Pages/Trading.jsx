import React from 'react'
import '../Components/Trading/Trading.css'
import Quote from "../Components/Trading/Quote"
import FAQ from "../Components/Home/FAQ"
import ImportCountries from '../Components/Home/ImportCountries'

function Trading() {
  return (
    <>
    <div className="trading-bg d-flex flex-column align-items-center justify-content-center text-white text-center" >
      <h1 className="display-4 fw-bold" style={{maxWidth:'600px'}}>lorem ipsum lorem ipsum</h1>
      <p className="fs-5" style={{maxWidth:'750px'}}>We’ll create high-quality linkable content and build at least 40 high-authority link to each asset. Bring the way for you to grow your website & improve skills.</p>
    </div>
    <Quote/>
    <FAQ/>
    <ImportCountries/>
</>
  )
}

export default Trading
