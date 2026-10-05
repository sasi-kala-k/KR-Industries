import React from 'react'
import image from '../../assets/work-section-img.svg'
import circleCheck from '../../assets/circle-check.svg'
import { FaPlay } from "react-icons/fa"
import video from '../../assets/work-section-video.svg'

function OurWorkSection() {
    const checklistItems = [
    "Full Designing Idea",
    "Material Choosing Plan",
    "24 Hours Support",
    "24 Hours Support"
  ]
  return (
    <div className="cus-padding">
      <div className="d-flex flex-column flex-lg-row gap-5 align-items-center mb-5">
        <img src={image} alt="creative-work" height={260} className="rounded-4" />
        <div className="d-flex flex-column gap-3" >
          <small className="text-secondary ">We Are Professionals</small>
          <h1 className=" display-5 fw-bold">Let's Explore How Our Team Delivers the Best in Wooden Craft and Interior Solutions</h1>
        </div>
      </div>
      <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-5">
        <div style={{maxWidth:'370px'}} className="p-1 p-lg-3">
          <h4>Our Work Commited</h4>
          <p className="text-secondary "  >
            Our work is committed to excellence in the wooden industry, combining skilled craftsmanship with creative design to bring high-quality wooden solutions to life. Whether it's interior fittings, custom furniture, or architectural woodwork, we take pride in delivering durable, beautiful, and functional creations that stand the test of time.
          </p>
        </div>
        <div className="gray-card rounded-5 p-5 " style={{ width: '900px', maxWidth: '370px' }}>
          <i className="fw-semibold fs-5">“ Lorem ipsum dolor sit amet consectet labore et dolore “</i>
           <div className="d-flex flex-column gap-3 mt-3">
        {checklistItems.map((item, index) => (
          <div key={index} className="d-flex align-items-center gap-2">
            <img src={circleCheck} alt="check" height={20} />
            <span className="text-secondary">{item}</span>
          </div>
        ))}
      </div>
        </div>
     
          <div className="d-flex align-items-center justify-content-center work-sec-video w-100"
            style={{ backgroundImage: `url(${video})`, maxWidth:'370px' }}>
            <button className="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center cus-play-btn shadow" style={{ height: '90px', width: '90px' }}>
              <FaPlay className="text-muted" style={{ height: '35px', width: '27px' }} />
            </button> 
         
        </div>
      </div>
    </div>
  )
}

export default OurWorkSection
