import React from 'react'
import image from '../../assets/founder.svg'

function Founder() {
    return (
        <div className="gray-bg cus-padding">
            <div className="row g-5 ">
                <div className="col-12 col-lg-5">
                    <img src={image} className="img-fluid w-100 h-100"  alt="image" style={{ objectFit: 'cover' }}/>
                </div>
                <div className="col-12 col-lg-7 d-flex flex-column gap-2 gap-lg-0  text-secondary">
                    <p className="fw-semibold fs-4 mb-0">MR.D.Balasubramaniam</p>
                    <h1 classname="display-1 fw-bold">Lorem ipsum dolor sit amet, consectetur  
                        <span className="text-brown ms-2">adipiscing</span> elit</h1>
                    <p classname="">we have earned the trust of our esteemed clients all across the world.We are well renowned in the packaging industry with our qualitative range of packaging materials and fast services. We have long list of clients spread across different industries. This has been made possible due to the able guidance of Mr.D.Balasubramaniam a simple man yet he is the driving force behind K.R.Industries’s success. He is a man with vision to create a venerable business of excellence.</p>
                    <p classname="">MR.D.Balasubramaniam is the inspiration to all , which made his offspring MR. Ravi Balasubramaniam to travel in the same path achieving towards more successfully.Shri B.Ravi s/o of late D.Balasubramaniam young entrepreneur followed his father’s footsteps made this company to March towards positive mode.His interest made him as a “Best importer” in chennai and implemented more way to make KR Industries as a landmark .</p>
                </div>
            </div>
        </div>
    )
}

export default Founder
