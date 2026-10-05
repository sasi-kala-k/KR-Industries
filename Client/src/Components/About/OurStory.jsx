import React from 'react'
import image from '../../assets/OurStoryImage.svg'

function OurStory() {
  return (

      <div className=" cus-padding">
                  <div className="row g-4 g-lg-5">
                      <div className="col-12 col-lg-6">
                          <img src={image} className="img-fluid" alt="image" />
                      </div>
                      <div className="col-12 col-lg-6 d-flex flex-column gap-2 py-3 ">
                          <p className=" text-secondary">Lorem ipsum dolor sit amet</p>
                          <h1 className="display-5 fw-bold">kR Industries</h1>
                          <p className=" text-secondary">Founded with the Aim to provide the BEST QUALITY of Packing items such as: Pallets, Crates, Boxes & Plywood Boxes.</p>
                          <p  className=" text-secondary">To be One of the Direct Importers in Pine, Spruce & Plywood’s( Birch Plywood, OSB, Poplar core E1 Glue,) Wall panels.</p>
                          <p  className=" text-secondary">We have mastered the challenges of financial and logistical requirements of the business by sheer hard work and dedication towards the patrons who have supported us and always endeavored to bring optimum value for our clients money.</p>
                      </div>
                  </div>
              </div>

  )
}

export default OurStory
