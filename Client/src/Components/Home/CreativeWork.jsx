import React from 'react'
import image from '../../assets/creative_work_img.svg'

function CreativeWork() {
  return (
    <>
    <div className="gray-bg d-flex  cus-padding">
        <div className="d-flex gap-5 flex-wrap flex-lg-nowrap">
            <div className="d-flex flex-column gap-3" style={{maxWidth:'850px'}}>
            <small className="text-secondary">Learn More</small>
            <h2 className="display-5 fw-bold">We Craft the Finest Creativity to Deliver the Best in Wooden Interiors.</h2>
<div className="d-flex flex-column flex-lg-row gap-5">
    <div className="gray-card rounded-5 p-4 d-flex flex-column gap-3" style={{width:'380px'}}>
<hr className="cus-hr" ></hr>
<p className="text-secondary">we blend creativity with craftsmanship to deliver exceptional wooden interiors that elevate every space.
From elegant furniture to custom woodwork, our designs reflect innovation, precision, and a deep respect for natural materials.</p>
    </div>
    <div className="d-flex flex-column gap-4 ps-2 ps-lg-3">
        <a href="#" className="text-decoration-none border-left ps-3"><h5 className="text-dark fw-bold">Creative Work</h5>
        <p className="text-secondary mb-0">Lorem ipsum dolor sit amet</p></a>
        <a href="#" className="text-decoration-none border-left ps-3"><h5 className="text-dark fw-bold">Creative Work</h5>
        <p className="text-secondary mb-0">Lorem ipsum dolor sit amet</p></a>
        <a href="#" className="text-decoration-none border-left ps-3"><h5 className="text-dark fw-bold">Creative Work</h5>
        <p className="text-secondary mb-0">Lorem ipsum dolor sit amet</p></a>
                
    </div>
</div>
        </div>
        <div>
            <img src={image} alt="creative-work" height={500} className="rounded-4"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default CreativeWork
