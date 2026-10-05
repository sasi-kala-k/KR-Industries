import React from 'react'
import '../Components/Infrastructure/Infrastructure.css'
import Facility from '../Components/Infrastructure/Facility'
import FAQ from '../Components/Home/FAQ'
import ImportCountries from '../Components/Home/ImportCountries'

function Infrastructure() {
    return (
        <>
            <div className='bg-infra d-flex flex-column gap-3 align-items-center justify-content-center text-white text-center'>


                <h1 className="display-5 fw-bold" style={{ maxWidth: '1000px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h1>
                <p className="fs-6" style={{ maxWidth: '750px' }}>We’ll create high-quality linkable content and build at least 40 high-authority link to each asset. Bring the way for you to grow your website & improve skills.</p>
                <button className=' bg-transparent rounded-pill border-white text-white small mt-4 px-5 py-3'>EXPLORE NOW</button>
            </div>
            <Facility />
            <FAQ />
            <ImportCountries />
        </>
    )
}

export default Infrastructure
