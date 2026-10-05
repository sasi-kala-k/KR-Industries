import React from 'react'
import icon1 from '../../assets/bolt.svg'
import icon2 from '../../assets/calendar.svg'
import image1 from '../../assets/About-img1.svg'
import image2 from '../../assets/About-img2.svg'
import { ImPhone } from "react-icons/im"
import { FaPhone } from "react-icons/fa"



function AboutSection() {
    return (
        <>
            <div className="px-3 px-lg-5 py-0 py-lg-5 my-0 my-lg-5">
                <div className="row g-5">
                    <div className="col-12 col-lg-6">
                        <div className="position-relative">


                            <div className="about-img1-wrapper px-3 px-lg-5 my-5">
                                <img
                                    src={image1}
                                    alt="image1"
                                    className="rounded-5 w-100 h-100"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            <div className="about-img2-wrapper position-absolute">
                                <img
                                    src={image2}
                                    alt="image2"
                                    className="w-100 h-100 bottom-0 end-0"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>


                            <div className="cus-phone-card position-absolute bg-white rounded-3 shadow d-flex align-items-center gap-3 px-4 py-3 rounded-5">

                                <ImPhone className="text-warning cus-phone-icon" size={35} />

                                <div>
                                    <p className="fw-bold mb-0 text-muted fs-5 ">Telephone</p>
                                    <p className="text-muted mb-0 small fs-6">+62 123 456 789</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="d-flex flex-column align-items-start gap-3 py-3 py-lg-5 my-3 my-lg-5">
                            <small className="text-muted">Welcome to</small>
                            <h1>kR Industries</h1>
                            <p className="text-muted ">K.R.Industries is known for the best manufacturing industries in Chennai.K.R.Industries was started in the year 1980, with a great intention to provide Best Quality of Wooden items to fill the thirst in Packing Industries. we have earned the trust of our esteemed clients all across the world.We are well renowned in the packaging industry with our qualitative range of packaging materials and fast services. We have long list of clients spread across different industries. This has been made possible due to the able guidance of Mr.D.Balasubramaniam a simple man yet he is the driving force behind K.R.Industries’s success. He is a man with vision to create a venerable business of excellence.</p>

                            <i className="fs-5 fw-semibold vertical-line ps-3 my-0">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore “</i>
                            <div className="d-flex align-items-start justify-content-center gap-3 ">
                                <div className="d-flex align-items-center justify-content-center cus-circle">
                                    <img src={icon2} height={25} alt="icon1" />
                                </div>
                                <div className="text-muted ">
                                    <h5>15 Years Of Business</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>

                            </div>
                            <div className="d-flex align-items-start justify-content-center gap-3">
                                <div className="d-flex align-items-center justify-content-center cus-circle">
                                    <img src={icon1} height={25} alt="icon1" />
                                </div>
                                <div className="text-muted ">
                                    <h5>Exclusive Team Work</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutSection
