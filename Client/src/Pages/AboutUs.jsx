import React from 'react'
import image1 from '../assets/aboutImage1.svg'
import image2 from '../assets/aboutImage2.svg'
import image3 from '../assets/aboutImage3.svg'
import image4 from '../assets/aboutImage4.svg'
import image5 from '../assets/aboutImage5.svg'
import image6 from '../assets/aboutImage6.svg'
import '../Components/About/About.css'
import Founder from "../Components/About/Founder"
import StatsSection from "../Components/Home/StatsSection"
import FAQ from "../Components/Home/FAQ"
import ImportCountries from "../Components/Home/ImportCountries"
import OurStory from "../Components/About/OurStory"


function AboutUs() {
    return (
        <>
            <div className="d-flex flex-column align-items-center gap-3 gap-lg-5 px-3 px-lg-0 ps-0 ps-lg-5 py-0 my-4">
                <div className="d-flex flex-column align-items-center text-center" style={{ maxWidth: '600px' }}>
                    <h1 className="display-5 fw-bold">About Us</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row g-0 g-lg-5 pb-0 px-3 px-lg-0" >
                    <div className="col-12 col-lg-5 py-0 py-lg-5 align-items-stretch" style={{ height: '380px' }}>
                        <h1 className="display-5 fw-bold mb-3">About K.R INDUSTRIES</h1>
                        <p className="text-secondary ">K.R.Industries is known for the best manufacturing industries in Chennai.K.R.Industries was started in the year 1980, with a great intention to provide Best Quality of Wooden items to fill the thirst in Packing Industries.</p>
                    </div>
               
                    <div className="col-12 col-lg-7 d-flex gap-1" style={{ height: '380px' }}>
                        <div className="flex-fill">
                            <img src={image1} alt="image1" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="flex-fill">
                            <img src={image2} alt="image2" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="flex-fill">
                            <img src={image3} alt="image3" className="w-100 h-100"
                                style={{ objectFit: 'cover', objectPosition: 'center' }} />
                        </div>
                        <div className="flex-fill d-flex flex-column gap-2">
                            <img src={image4} alt="image4" className="w-100" style={{ objectFit: 'cover', height: '35%' }} />
                            <img src={image5} alt="image5" className="w-100" style={{ objectFit: 'cover', height: '65%' }} />
                        </div>
                        <div className="flex-fill">
                            <img src={image6} alt="image6" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>

            </div>
            <Founder />
            <OurStory/>
            <StatsSection />
            <FAQ />
            <ImportCountries />
        </>
    )
}

export default AboutUs
