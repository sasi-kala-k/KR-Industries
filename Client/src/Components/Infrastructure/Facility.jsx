import React from 'react'
import image1 from '../../assets/facility1.svg'
import image2 from '../../assets/facility2.svg'
import image3 from '../../assets/facility3.svg'
import image4 from '../../assets/facility4.svg'

function Facility() {
    return (
        <div className='mx-5 my-5'>
            <div className='d-flex flex-column flex-lg-row gap-3 gap-lg-5'>
                <h1 className='text-brown display-6 fw-bold w-100'>Lorem ipsum dolor sit amet</h1>
                <p className='text-secondary ps-0 ps-lg-5 ms-0 ms-lg-5'>We’ll create high-quality linkable content and build at least 40 high-authority link to each asset. Bring the way for you to grow your website & improve skills.We’ll create high-quality linkable content and build at least 40 high-authority link to each asset. Bring the way for you to grow your website & improve skills.</p>
            </div>
            <div className='row'>
                <div className='col-12 col-lg-5'>
                    <img src={image1} className='img-fluid' />
                </div>
                <div className='col-12 col-lg-7 d-flex flex-column gap-4'>
                    <div className='row'>
                        <div className='col-12 mt-1'>
                            <img src={image2} className='img-fluid' />
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-6'><img src={image3} className='img-fluid' /></div>
                        <div className='col-6'><img src={image4} className='img-fluid' /></div>

                    </div>
                </div>

            </div>
        </div>
    
  )
}

export default Facility
